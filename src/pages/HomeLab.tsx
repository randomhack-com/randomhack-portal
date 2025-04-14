
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CyberHeading } from "@/components/CyberHeading";
import { CyberCard } from "@/components/CyberCard";
import { ServerIcon, Database, Cpu, Wifi, HardDrive, Network } from "lucide-react";
import { GlowingButton } from "@/components/ui/GlowingButton";

export default function HomeLab() {
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home Lab | RandomHack";
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cyber-black to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cyber-black to-transparent"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-cyber-green/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-cyber-green/10 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-cyber-green/10 text-cyber-green text-sm font-medium rounded-full mb-4">
            Servers & Network
          </span>
          <CyberHeading as="h1" variant="green" glow="sm" className="mb-4">
            Home Lab Setup
          </CyberHeading>
          <p className="text-cyber-text-muted text-lg max-w-2xl mx-auto">
            My self-hosted server infrastructure, network configuration, and home automation setup
          </p>
        </motion.div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {["overview", "servers", "network", "automation"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-cyber-green/20 text-cyber-green border border-cyber-green/30"
                  : "text-cyber-text-muted hover:text-cyber-text bg-cyber-dark/50 hover:bg-cyber-dark/80"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="space-y-16">
          {activeTab === "overview" && (
            <OverviewTab />
          )}
          
          {activeTab === "servers" && (
            <ServersTab />
          )}
          
          {activeTab === "network" && (
            <NetworkTab />
          )}
          
          {activeTab === "automation" && (
            <AutomationTab />
          )}
        </div>
      </div>
    </main>
  );
}

// Tab Components

function OverviewTab() {
  return (
    <div className="space-y-12">
      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CyberCard className="overflow-hidden">
          <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h2 className="text-3xl font-bold text-cyber-text">Home Lab Overview</h2>
              <p className="text-cyber-green mt-2">Self-hosted Infrastructure</p>
            </div>
          </div>
          
          <p className="text-cyber-text-muted mb-4">
            Welcome to my home lab setup - a collection of servers, networking equipment, and automation tools that I use for learning, testing, and hosting various services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <StatsCard icon={ServerIcon} title="Servers" value="4" />
            <StatsCard icon={Database} title="Storage" value="24TB" />
            <StatsCard icon={Cpu} title="CPU Cores" value="32" />
          </div>
          
          <p className="text-cyber-text-muted">
            This lab serves as my playground for experimenting with new technologies, self-hosting applications, and automating aspects of my home. Explore the tabs to learn more about each component of the setup.
          </p>
        </CyberCard>
      </motion.div>
      
      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-cyber-green">Key Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={ServerIcon}
            title="Server Cluster"
            description="A collection of servers running Proxmox for virtualization and container management."
          />
          
          <FeatureCard 
            icon={Network}
            title="Network Setup"
            description="Enterprise-grade networking equipment with VLANs, managed switches, and wireless APs."
          />
          
          <FeatureCard 
            icon={Database}
            title="Storage Array"
            description="Redundant NAS setup with ZFS for data integrity and high availability."
          />
        </div>
      </section>
    </div>
  );
}

function ServersTab() {
  const servers = [
    {
      name: "Hyperion",
      role: "Virtualization Host",
      specs: "AMD Ryzen 9 5900X, 64GB RAM, 2TB NVMe",
      services: ["Proxmox VE", "Docker", "Kubernetes"],
      description: "Primary virtualization server running multiple VMs and containers."
    },
    {
      name: "Helios",
      role: "Storage Server",
      specs: "Intel Core i5-11600K, 32GB RAM, 12TB RAID",
      services: ["TrueNAS", "Plex Media Server", "Backup Services"],
      description: "Network attached storage with media server capabilities."
    },
    {
      name: "Atlas",
      role: "Application Server",
      specs: "AMD Ryzen 7 3700X, 32GB RAM, 1TB NVMe",
      services: ["Jenkins", "GitLab", "Development Environments"],
      description: "Dedicated to running development tools and CI/CD pipelines."
    },
    {
      name: "Hermes",
      role: "Edge Server",
      specs: "Intel NUC i5, 16GB RAM, 512GB SSD",
      services: ["Nginx Proxy Manager", "VPN", "Monitoring"],
      description: "Edge server handling external traffic, authentication, and monitoring."
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6 text-cyber-green">Server Infrastructure</h2>
      
      <p className="text-cyber-text-muted mb-8">
        My homelab consists of several servers handling different aspects of the infrastructure. Each server is specialized for specific workloads to ensure optimal performance and resource allocation.
      </p>
      
      <div className="space-y-6">
        {servers.map((server, index) => (
          <motion.div
            key={server.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CyberCard className="border-l-4 border-l-cyber-green">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-cyber-green">{server.name}</h3>
                  <p className="text-cyber-text-muted">{server.role}</p>
                </div>
              </div>
              
              <p className="text-cyber-text-muted mb-4">{server.description}</p>
              
              <div className="bg-cyber-dark/50 p-3 rounded-md mb-4">
                <h4 className="text-sm font-semibold mb-2 text-cyber-text">Hardware Specifications</h4>
                <p className="text-sm text-cyber-text-muted">{server.specs}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-2 text-cyber-text">Running Services</h4>
                <div className="flex flex-wrap gap-2">
                  {server.services.map((service) => (
                    <span 
                      key={service}
                      className="inline-block px-2 py-1 bg-cyber-green/10 rounded text-xs font-medium text-cyber-green"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </CyberCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function NetworkTab() {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold mb-6 text-cyber-green">Network Architecture</h2>
      
      <p className="text-cyber-text-muted mb-8">
        My network setup is designed for security, reliability, and performance. It features segmentation through VLANs, managed switches, and enterprise-grade wireless access points.
      </p>
      
      {/* Network Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CyberCard className="relative p-0 overflow-hidden">
          <div className="p-6 bg-cyber-dark/50">
            <h3 className="text-xl font-bold text-cyber-green mb-2">Network Topology</h3>
            <p className="text-cyber-text-muted">Visual representation of network layout</p>
          </div>
          
          <div className="h-64 bg-cyber-dark/30 flex items-center justify-center p-6">
            <div className="text-cyber-text-muted">
              [Network diagram visualization would go here]
            </div>
          </div>
        </CyberCard>
      </motion.div>
      
      {/* Network Equipment */}
      <section>
        <h3 className="text-xl font-bold mb-4 text-cyber-green">Network Equipment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NetworkEquipmentCard 
            title="UniFi Dream Machine Pro"
            category="Router/Firewall"
            description="Core network device providing routing, firewall, IDS/IPS, and network controller functionality."
          />
          
          <NetworkEquipmentCard 
            title="UniFi Switch 24 PoE"
            category="Managed Switch"
            description="24-port managed Gigabit switch with Power over Ethernet for access points and cameras."
          />
          
          <NetworkEquipmentCard 
            title="UniFi Access Points"
            category="Wireless"
            description="Multiple WiFi 6 access points strategically placed for optimal coverage."
          />
          
          <NetworkEquipmentCard 
            title="10GbE Backbone"
            category="Connectivity"
            description="10GbE SFP+ connections between core network equipment and server nodes."
          />
        </div>
      </section>
      
      {/* VLANs */}
      <section>
        <h3 className="text-xl font-bold mb-4 text-cyber-green">Network Segmentation</h3>
        
        <p className="text-cyber-text-muted mb-4">
          The network is segmented using VLANs to isolate different types of devices and services for better security and manageability.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-cyber-dark/50">
                <th className="p-3 text-left text-cyber-green text-sm font-medium">VLAN ID</th>
                <th className="p-3 text-left text-cyber-green text-sm font-medium">Name</th>
                <th className="p-3 text-left text-cyber-green text-sm font-medium">Purpose</th>
                <th className="p-3 text-left text-cyber-green text-sm font-medium">IP Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyber-border/20">
              <tr className="bg-cyber-dark/30">
                <td className="p-3 text-cyber-text">10</td>
                <td className="p-3 text-cyber-text">Management</td>
                <td className="p-3 text-cyber-text-muted">Network devices and management interfaces</td>
                <td className="p-3 text-cyber-text-muted">10.10.10.0/24</td>
              </tr>
              <tr className="bg-cyber-dark/20">
                <td className="p-3 text-cyber-text">20</td>
                <td className="p-3 text-cyber-text">Servers</td>
                <td className="p-3 text-cyber-text-muted">Physical and virtual servers</td>
                <td className="p-3 text-cyber-text-muted">10.20.20.0/24</td>
              </tr>
              <tr className="bg-cyber-dark/30">
                <td className="p-3 text-cyber-text">30</td>
                <td className="p-3 text-cyber-text">Trusted Devices</td>
                <td className="p-3 text-cyber-text-muted">Personal computers and trusted devices</td>
                <td className="p-3 text-cyber-text-muted">10.30.30.0/24</td>
              </tr>
              <tr className="bg-cyber-dark/20">
                <td className="p-3 text-cyber-text">40</td>
                <td className="p-3 text-cyber-text">IoT</td>
                <td className="p-3 text-cyber-text-muted">Smart home and IoT devices</td>
                <td className="p-3 text-cyber-text-muted">10.40.40.0/24</td>
              </tr>
              <tr className="bg-cyber-dark/30">
                <td className="p-3 text-cyber-text">50</td>
                <td className="p-3 text-cyber-text">Guest</td>
                <td className="p-3 text-cyber-text-muted">Guest WiFi network</td>
                <td className="p-3 text-cyber-text-muted">10.50.50.0/24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function AutomationTab() {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold mb-6 text-cyber-green">Home Automation</h2>
      
      <p className="text-cyber-text-muted mb-8">
        My home automation setup integrates various smart home devices and services for a seamless, automated living environment. Everything is locally controlled for privacy and reliability.
      </p>
      
      {/* Main Automation Platform */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CyberCard>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md flex items-center justify-center bg-cyber-green/10">
              <HardDrive className="w-6 h-6 text-cyber-green" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-cyber-green mb-2">Home Assistant</h3>
              <p className="text-cyber-text-muted mb-4">
                The core of my home automation system is Home Assistant running in a dedicated VM with a Z-Wave/Zigbee controller. It integrates all smart devices and provides automations, dashboards, and voice control.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-2 py-1 bg-cyber-dark rounded text-xs font-medium text-cyber-text-muted">Z-Wave</span>
                <span className="inline-block px-2 py-1 bg-cyber-dark rounded text-xs font-medium text-cyber-text-muted">Zigbee</span>
                <span className="inline-block px-2 py-1 bg-cyber-dark rounded text-xs font-medium text-cyber-text-muted">MQTT</span>
                <span className="inline-block px-2 py-1 bg-cyber-dark rounded text-xs font-medium text-cyber-text-muted">ESPHome</span>
                <span className="inline-block px-2 py-1 bg-cyber-dark rounded text-xs font-medium text-cyber-text-muted">Node-RED</span>
              </div>
              
              <GlowingButton variant="green" size="sm">
                View Dashboard
              </GlowingButton>
            </div>
          </div>
        </CyberCard>
      </motion.div>
      
      {/* Smart Home Categories */}
      <section>
        <h3 className="text-xl font-bold mb-6 text-cyber-green">Automated Systems</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AutomationSystemCard 
            title="Lighting Control"
            description="Smart bulbs and switches throughout the house with presence detection, schedules, and scene control."
            devices={["Philips Hue", "Z-Wave Switches", "Motion Sensors"]}
          />
          
          <AutomationSystemCard 
            title="Climate Control"
            description="Smart thermostats and sensors for optimal temperature control and energy efficiency."
            devices={["Ecobee Thermostat", "Temperature Sensors", "Smart Vents"]}
          />
          
          <AutomationSystemCard 
            title="Security System"
            description="Integrated cameras, motion sensors, and door/window sensors with automated alerts."
            devices={["IP Cameras", "Door Sensors", "Motion Detectors"]}
          />
          
          <AutomationSystemCard 
            title="Media Control"
            description="Automated media systems that respond to presence, time of day, and voice commands."
            devices={["Smart TVs", "Audio Systems", "IR Controllers"]}
          />
        </div>
      </section>
      
      {/* Custom Automations */}
      <section>
        <h3 className="text-xl font-bold mb-6 text-cyber-green">Key Automations</h3>
        
        <div className="space-y-4">
          <CyberCard className="bg-cyber-dark/50">
            <h4 className="text-lg font-semibold text-cyber-green mb-2">Morning Routine</h4>
            <p className="text-cyber-text-muted">
              Gradually turns on lights, adjusts temperature, opens blinds, and plays morning news based on wake-up time.
            </p>
          </CyberCard>
          
          <CyberCard className="bg-cyber-dark/50">
            <h4 className="text-lg font-semibold text-cyber-green mb-2">Presence Awareness</h4>
            <p className="text-cyber-text-muted">
              Detects when people arrive or leave home and adjusts systems accordingly, including lighting, HVAC, and security.
            </p>
          </CyberCard>
          
          <CyberCard className="bg-cyber-dark/50">
            <h4 className="text-lg font-semibold text-cyber-green mb-2">Energy Management</h4>
            <p className="text-cyber-text-muted">
              Monitors energy usage, automatically turns off unused devices, and optimizes consumption based on time-of-use rates.
            </p>
          </CyberCard>
          
          <CyberCard className="bg-cyber-dark/50">
            <h4 className="text-lg font-semibold text-cyber-green mb-2">Security Monitoring</h4>
            <p className="text-cyber-text-muted">
              Intelligently monitors for unusual activity, sends alerts, and can trigger emergency routines if needed.
            </p>
          </CyberCard>
        </div>
      </section>
    </div>
  );
}

// Helper Components

function StatsCard({ icon: Icon, title, value }: { icon: React.ComponentType<any>; title: string; value: string }) {
  return (
    <div className="bg-cyber-dark/50 rounded-md p-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-md flex items-center justify-center bg-cyber-green/10">
        <Icon className="w-5 h-5 text-cyber-green" />
      </div>
      <div>
        <p className="text-cyber-text-muted text-sm">{title}</p>
        <p className="text-xl font-bold text-cyber-text">{value}</p>
      </div>
    </div>
  );
}

import { memo } from "react";

const FeatureCard = memo(function FeatureCard({ icon: Icon, title, description }: { icon: React.ComponentType<any>; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <CyberCard className="h-full">
        <div className="w-12 h-12 rounded-md flex items-center justify-center mb-4 bg-cyber-green/10">
          <Icon className="w-6 h-6 text-cyber-green" />
        </div>
        
        <h3 className="text-lg font-bold mb-2 text-cyber-green">{title}</h3>
        <p className="text-sm text-cyber-text-muted">{description}</p>
      </CyberCard>
    </motion.div>
  );
});

function NetworkEquipmentCard({ title, category, description }: { title: string; category: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <CyberCard>
        <h4 className="text-lg font-bold mb-1 text-cyber-green">{title}</h4>
        <p className="text-xs text-cyber-green/70 mb-3">{category}</p>
        <p className="text-sm text-cyber-text-muted">{description}</p>
      </CyberCard>
    </motion.div>
  );
}

function AutomationSystemCard({ title, description, devices }: { title: string; description: string; devices: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <CyberCard>
        <h4 className="text-lg font-bold mb-2 text-cyber-green">{title}</h4>
        <p className="text-sm text-cyber-text-muted mb-4">{description}</p>
        
        <div>
          <h5 className="text-xs font-semibold mb-2 text-cyber-text">Key Devices</h5>
          <div className="flex flex-wrap gap-2">
            {devices.map((device) => (
              <span 
                key={device}
                className="inline-block px-2 py-1 bg-cyber-green/10 rounded text-xs font-medium text-cyber-green/80"
              >
                {device}
              </span>
            ))}
          </div>
        </div>
      </CyberCard>
    </motion.div>
  );
}
