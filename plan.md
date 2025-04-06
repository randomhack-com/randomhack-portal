# Deployment Plan: Neon Hacker Haven Portal to Proxmox Kubernetes

This plan outlines the steps remaining after the initial configuration files (`Dockerfile`, `nginx.conf`, GitHub Actions workflow, Kubernetes manifests) have been created.

**Phase 1: Review and Update Configuration**

*   [ ] **Review `.github/workflows/build-push.yaml`**:
    *   Verify the `env.IMAGE_NAME` variable correctly points to your GitHub Container Registry (GHCR) path (e.g., `ghcr.io/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME`).
*   [ ] **Review `k8s/deployment.yaml`**:
    *   Update the placeholder `image: ghcr.io/YOUR_ORG/YOUR_REPO:latest` to your actual GHCR image path. (Note: Your GitOps tool will likely manage the specific tag/SHA later).
*   [ ] **Review `k8s/service.yaml`**:
    *   Verify the `spec.ports.port` and `spec.ports.targetPort` match the port exposed by your application container (e.g., 80 for the default Nginx).
    *   Verify the `spec.selector.app` label matches the label used in `k8s/deployment.yaml`.

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
        *   `plan.md` (this file) # Updated plan
        # Note: k8s/ingress.yaml is intentionally excluded as Cloudflare Tunnel is used.
    *   Push the changes to the `main` branch (or your primary branch).
*   [ ] **Verify CI Workflow**:
    *   Go to the "Actions" tab in your GitHub repository.
    *   Confirm that the "Build and Push Docker Image to GHCR" workflow runs successfully after the push.
    *   Check GHCR (under your user/org Packages) to ensure the Docker image was pushed with `latest` and Git SHA tags.

**Phase 3: Proxmox Kubernetes Cluster & Cloudflare Tunnel Setup**

*   [ ] **Install Kubernetes Cluster (Simplified - e.g., using K3s or kubeadm)**:
    *   Set up at least one control-plane node and one worker node using Debian/Ubuntu VMs on Proxmox.
    *   **Option A (K3s - Recommended for simplicity):**
        *   Follow the K3s installation guide ([https://docs.k3s.io/installation](https://docs.k3s.io/installation)). Install on the control-plane node first, then join worker nodes using the provided token.
    *   **Option B (kubeadm):**
        *   Follow the official Kubernetes documentation for installing kubeadm, kubelet, and kubectl ([https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)).
        *   Initialize the control plane using `kubeadm init`.
        *   Install a CNI network plugin (e.g., Calico, Flannel).
        *   Join worker nodes using `kubeadm join`.
    *   Verify cluster connectivity (`kubectl get nodes`).
*   [ ] **Install and Configure Cloudflare Tunnel (`cloudflared`)**:
    *   Follow the Cloudflare documentation to install `cloudflared` ([https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/)).
    *   Log in `cloudflared` to your Cloudflare account (`cloudflared login`).
    *   Create a Cloudflare Tunnel (`cloudflared tunnel create <your-tunnel-name>`). Note the tunnel ID and credentials file path.
    *   Create a DNS record for your tunnel in Cloudflare, pointing `randomhack.com` (or a subdomain like `portal.randomhack.com`) to the tunnel (`cloudflared tunnel route dns <your-tunnel-name> randomhack.com`).
    *   Create a `cloudflared` configuration file (`config.yml`) to route traffic to your Kubernetes service. Example:
        ```yaml
        tunnel: <your-tunnel-uuid>
        credentials-file: /path/to/.cloudflared/<your-tunnel-uuid>.json # Adjust path as needed

        ingress:
          - hostname: randomhack.com # Your domain
            service: http://<service-name>.<namespace>:<service-port>
            # Example: http://neon-hacker-haven-portal-service.default:80
          - service: http_status:404 # Catch-all rule
        ```
    *   Run the tunnel as a service within your Kubernetes cluster (recommended) or on a dedicated machine. For Kubernetes, use the official Helm chart or deploy `cloudflared` as a Deployment. ([https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/deploy-tunnels/kubernetes/](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/deploy-tunnels/kubernetes/)). Ensure the `config.yml` and credentials are mounted correctly.
*   [ ] **Install and Configure GitOps Tool**:
    *   Choose and install a GitOps tool (e.g., Argo CD or Flux CD) into your cluster.
    *   Configure the GitOps tool to:
        *   **Option A (Monitor Git Repo):** Watch the `k8s` directory in your GitHub repository and automatically apply the manifests found there.
        *   **Option B (Monitor Image Registry):** Watch your GHCR image repository for new tags (e.g., `latest` or based on Git SHA) and update the `image:` tag in the `k8s/deployment.yaml` manifest within the cluster.
    *   Ensure the GitOps tool has the necessary permissions to manage resources (Deployments, Services, HPAs, Ingresses) in the target namespace.

**Phase 4: Cloudflare DNS Verification**

 *   [ ] **Verify Cloudflare DNS**:
     *   Go to your Cloudflare dashboard.
     *   Confirm that a CNAME record for `randomhack.com` (or your chosen subdomain) exists and points to your Cloudflare Tunnel (e.g., `<tunnel-uuid>.cfargotunnel.com`). This should have been created in the previous phase by `cloudflared tunnel route dns`.

**Phase 5: Verification**

*   [ ] **Check GitOps Tool Status**: Verify that your GitOps tool successfully synchronized the application and applied the Kubernetes manifests.
*   [ ] **Check Pod Status**: Use `kubectl get pods -n <your-namespace>` to ensure the application pods are running.
*   [ ] **Check Service Status**: Use `kubectl get svc -n <your-namespace>` to check the service.
*   [ ] **Check Cloudflare Tunnel Status**: Verify the `cloudflared` connector is running (either in Kubernetes or on its host machine) and connected to Cloudflare edge. Check logs if necessary.
*   [ ] **Access Application**: Open a web browser and navigate to `https://randomhack.com`. Verify the application loads correctly over HTTPS (provided by Cloudflare).
*   [ ] **Test Deployment Update**: Make a small change to the frontend code, commit, and push it. Verify the CI pipeline runs, pushes a new image, and the GitOps tool automatically updates the deployment in Kubernetes. Check `https://randomhack.com` again to see the change.