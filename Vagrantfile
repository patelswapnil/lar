# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "boxcutter/ubuntu1604"
  config.vm.box_version = "2.0.18"

  config.vm.provider "vmware_fusion" do |v|
    v.vmx["memsize"] = "768"
    v.vmx["numvcpus"] = "1"
  end

  config.vm.provider "virtualbox" do |v|

      v.memory = 768
      v.cpus = 1

      # Make VirtualBox work like VMware and use the host's resolving as a DNS proxy in NAT mode
      # https://www.virtualbox.org/manual/ch09.html#nat_host_resolver_proxy
      v.customize ["modifyvm", :id, "--natdnshostresolver1", "on" ]

  end

  # set the host IP.
  host_ip = "129.123.26.10"

  # define the hostname
  config.vm.hostname = 'lardev'

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: host_ip

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # If true, then any SSH connections made will enable agent forwarding.
  config.ssh.forward_agent = true

  # Share the folder between host and VM
  config.vm.synced_folder ".", "/vagrant"
  # config.vm.synced_folder ".", "/vagrant", type: 'nfs'
  # Enable to allow development with custom version of linz
  config.vm.synced_folder "../linz", "/usr/lib/node_modules/linz"
  # Enable development with a custom version of fdm-lib
  config.vm.synced_folder "../libraries/fdm-lib", "/usr/lib/node_modules/@fdm/fdm-lib"
  config.vm.synced_folder "../libraries/microbase-lib", "/usr/lib/node_modules/@fdm/microbase-lib"

  # Provision with shell, nice and simple :)
  # Fixes "stdin: is not a tty" and "mesg: ttyname failed : Inappropriate ioctl for device" messages --> mitchellh/vagrant#1673
  config.vm.provision :shell , inline: "(grep -q 'mesg n' /root/.profile && sed -i '/mesg n/d' /root/.profile && echo 'Ignore the previous error, fixing this now...') || exit 0;"

  # configuration step 0: set the host ip as an environment variable within the VM itself
  config.vm.provision "shell", inline: "echo ""export HOST_IP=#{host_ip}"" > /etc/profile.d/hostip.sh"

  # configuration step 0: provisioner
  config.vm.provision "shell", path: "vagrant/provisioner.sh"

  # configuration step 1: set timezone to Adelaide/Australia
  config.vm.provision "shell", path: "vagrant/timezone.sh"

  # configuration step 2: apt-get
  config.vm.provision "shell", path: "vagrant/apt-get.sh"

  # configuration step 3: nodejs (latest version)
  config.vm.provision "shell", path: "vagrant/nodejs.sh"

  # configuration step 4: setup environment variables
  config.vm.provision "shell", path: "vagrant/env.sh"

  # configuration step 5: git
  config.vm.provision "shell", path: "vagrant/git.sh"

  # configuration step 6: docker (latest version)
  config.vm.provision "shell", path: "vagrant/docker.sh"

  # configuration step 7: compose
  config.vm.provision "shell", path: "vagrant/compose.sh"

  # configuration step 8: mongo
  config.vm.provision "shell", path: "vagrant/mongo.sh"

  # configuration step 9: install development dependencies
  config.vm.provision "shell", path: "vagrant/dependencies.sh"

  # configuration step 10: clean (remove unccessary data and GBs)
  config.vm.provision "shell", path: "vagrant/clean.sh"

end
