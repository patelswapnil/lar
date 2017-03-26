#!/usr/bin/env bash

if [ ! -e /etc/vagrant/dependencies ]
then

    echo ">>> setting up dependencies"

    # symlink to vagrant user home directory to allow npm install for private modules
    if [ ! -e /home/vagrant/.npmrc ]; then
      ln -s /vagrant/.npmrc /home/vagrant/.npmrc
    fi

    # alias the docker-clean-containers script
    if [ ! -e /usr/local/bin/docker-clean-containers ]; then
      ln -s /vagrant/vagrant/scripts/docker-clean-containers /usr/local/bin/docker-clean-containers
    fi
    if [ ! -e /usr/local/bin/docker-clean-images ]; then
      ln -s /vagrant/vagrant/scripts/docker-clean-images /usr/local/bin/docker-clean-images
    fi

    # Create a folder to use as a proxy for building NPM
    mkdir -p /npm
    chown vagrant:vagrant /npm

  # only run once
  touch /etc/vagrant/dependencies

else

  echo ">>> dependencies already setup..."

fi
