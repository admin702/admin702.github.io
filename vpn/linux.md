--
--
# Kerio Control VPN Client for Debian/Ubuntu Linux

Kerio Control VPN Client is a tool for secure connection into a private network
running Kerio Control on its Internet gateway. 

## PREPARATION

For supported Debian/Ubuntu Linux distributions and hardware requirements,
please see: <http://www.kerio.com/control/technical-specifications>

Before you start with Kerio Control VPN Client installation, make sure that the
'debconf' and 'openssl' packages are installed on your system.

    # apt-get install debconf openssl

## INSTALLATION / UPGRADE

To install Kerio Control VPN Client on 32-bit Debian / Ubuntu, issue the following command:

    # dpkg -i kerio-control-vpnclient-###-linux.deb

(Replace ### above with the actual version string.)

To install Kerio Control VPN Client on 64-bit Debian / Ubuntu, issue the following command:

    # dpkg -i kerio-control-vpnclient-###-linux-amd64.deb

## CONFIGURATION

Kerio Control VPN Client for Linux supports only one VPN connection at a time.
During the package installation, a configuration wizard is automatically
started. The wizard will ask for the server name/address,
username, password and it offers an automatic detection of the server's 
certificate fingerprint (for server identity verification). 

Alternatively, the server's certificate fingerprint may be entered manually.

If you want to change the configuration later, run the wizard again
by invoking the following command:

    # dpkg-reconfigure kerio-control-vpnclient
 
Alternatively, it is possible to manually edit the configuration file:

    /etc/kerio-kvc.conf
 
After any changes to this file, it is necessary to reload the configuration:

    # /etc/init.d/kerio-kvc reload

### HOW TO VERIFY THE SERVER'S CERTIFICATE FINGERPRINT?

To make sure that the detected server's certificate fingerprint matches 
the desired server, take the following steps:
  
1. Open the Administration Console for particular Kerio Control server.
2. Go to the Configuration / Interfaces section.
3. Open the VPN Server properties.
4. Compare the content of the Fingerprint field with the automatically detected
certificate fingerprint.

## STARTING / STOPPING

Kerio Control VPN Client will be automatically started after installation 
and restarted after reconfiguration.

You can start/stop it manually by invoking the command:

    # /etc/init.d/kerio-kvc {start|stop|restart}

## UNINSTALLATION

To uninstall Kerio Control VPN Client, remove the installed package:

    # apt-get remove kerio-control-vpnclient
 
To uninstall Kerio Control VPN Client completely with configuration removal, use:

    # apt-get remove --purge kerio-control-vpnclient
 
## TROUBLESHOOTING

Kerio Control VPN Client creates the following log files in the  
`/var/log/kerio-kvc directory`:

`init.log` - information on starting and stopping the daemon
`error.log` - information on critical errors
`debug.log` - more detailed status and error messages

## OPEN SOURCE SOFTWARE NOTICE

The 'libkvnet' library is a free software distributed under the terms
of GNU Lesser General Public License (LGPL). 

Source tarball of the 'kvnet' module for a particular version is available at:  
<http://download.kerio.com/archive/opensource.php>

---

[Назад][back]

[back]: /vpn "Основная инструкция"
