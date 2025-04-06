# Deployment Plan: Neon Hacker Haven Portal to Proxmox Kubernetes

This plan outlines the steps remaining after the initial configuration files (`Dockerfile`, `nginx.conf`, GitHub Actions workflow, Kubernetes manifests) have been created.

**Phase 1: Review and Update Configuration**

*   [ ] **Review `.github/workflows/build-push.yaml`**:
    *   Verify the `env.IMAGE_NAME` variable correctly points to your GitHub Container Registry (GHCR) path (e.g., `ghcr.io/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME`).
*   [ ] **Review `k8s/deployment.yaml`**:
    *   Update the placeholder `image: ghcr.io/YOUR_ORG/YOUR_REPO:latest` to your actual GHCR image path. (Note: Your GitOps tool will likely manage the specific tag/SHA later).
*   [ ] **Review `k8s/ingress.yaml`**:
    *   Replace all instances of `your-domain.com` with the actual domain name you intend to use.
    *   Verify the `cert-manager.io/cluster-issuer:` annotation value (e.g., `"letsencrypt-prod"`) matches the name of a configured ClusterIssuer in your Kubernetes cluster.
    *   Verify the `spec.ingressClassName` (e.g., `nginx`) matches the Ingress controller you are using.

**Phase 2: GitHub Repository Setup**

*   [ ] **Configure Repository Permissions**:
    *   Go to your GitHub repository settings.
    *   Navigate to `Settings` > `Actions` > `General`.
    *   Under "Workflow permissions", ensure "Read and write permissions" is selected OR ensure "Write" permission is granted for `packages: write`. This allows the workflow to push images to GHCR.
*   [ ] **Commit and Push Files**:
    *   Commit all the newly created and modified files to your Git repository:
        *   `.dockerignore`
        *   `Dockerfile`
        *   `nginx.conf`
        *   `.github/workflows/build-push.yaml`
        *   `k8s/deployment.yaml`
        *   `k8s/service.yaml`
        *   `k8s/hpa.yaml`
        *   `k8s/ingress.yaml`
        *   `plan.md` (this file)
    *   Push the changes to the `main` branch (or your primary branch).
*   [ ] **Verify CI Workflow**:
    *   Go to the "Actions" tab in your GitHub repository.
    *   Confirm that the "Build and Push Docker Image to GHCR" workflow runs successfully after the push.
    *   Check GHCR (under your user/org Packages) to ensure the Docker image was pushed with `latest` and Git SHA tags.

**Phase 3: Proxmox Kubernetes Cluster Setup**

*   [ ] **Install Ingress Controller**:
    *   Ensure an Ingress controller (e.g., Nginx Ingress Controller, Traefik) is installed and running in your cluster. Refer to the specific controller's documentation for installation instructions.
*   [ ] **Install Cert-Manager (Optional but Recommended)**:
    *   If you want automatic TLS certificate provisioning via Let's Encrypt:
        *   Install cert-manager into your cluster.
        *   Configure a `ClusterIssuer` or `Issuer` resource (e.g., for Let's Encrypt production). Ensure the name matches the one used in `k8s/ingress.yaml`.
*   [ ] **Install and Configure GitOps Tool**:
    *   Choose and install a GitOps tool (e.g., Argo CD or Flux CD) into your cluster.
    *   Configure the GitOps tool to:
        *   **Option A (Monitor Git Repo):** Watch the `k8s` directory in your GitHub repository and automatically apply the manifests found there.
        *   **Option B (Monitor Image Registry):** Watch your GHCR image repository for new tags (e.g., `latest` or based on Git SHA) and update the `image:` tag in the `k8s/deployment.yaml` manifest within the cluster.
    *   Ensure the GitOps tool has the necessary permissions to manage resources (Deployments, Services, HPAs, Ingresses) in the target namespace.

**Phase 4: DNS Configuration**

*   [ ] **Update DNS Record**:
    *   Go to your DNS provider's management console.
    *   Create or update an `A` record (or `CNAME`) for `your-domain.com` (the one used in `k8s/ingress.yaml`).
    *   Point this record to the external IP address of your Kubernetes cluster's Ingress controller LoadBalancer service. (How to find this IP depends on your Proxmox K8s network setup and Ingress controller service type).

**Phase 5: Verification**

*   [ ] **Check GitOps Tool Status**: Verify that your GitOps tool successfully synchronized the application and applied the Kubernetes manifests.
*   [ ] **Check Pod Status**: Use `kubectl get pods -n <your-namespace>` to ensure the application pods are running.
*   [ ] **Check Service Status**: Use `kubectl get svc -n <your-namespace>` to check the service.
*   [ ] **Check Ingress Status**: Use `kubectl get ingress -n <your-namespace>` to check the Ingress status and ensure it has an assigned address.
*   [ ] **Check Certificate Status (if using cert-manager)**: Use `kubectl get certificate -n <your-namespace>` and `kubectl describe certificate <your-cert-name> -n <your-namespace>` to verify the TLS certificate was issued successfully.
*   [ ] **Access Application**: Open a web browser and navigate to `https://your-domain.com`. Verify the application loads correctly over HTTPS.
*   [ ] **Test Deployment Update**: Make a small change to the frontend code, commit, and push it. Verify the CI pipeline runs, pushes a new image, and the GitOps tool automatically updates the deployment in Kubernetes. Check the application in the browser again to see the change.