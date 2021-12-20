
![CordovaInstall](./resources/banner.png)

---

## INSTALLATION OF CORDOVA<br>
<br>
A pipelines it's a simple step by step roles for make somethings better.<br>
This file is a simple annotations for custom installation of  basic environment for *cordova + cordova assets + extras*.<br>
<br>
Important note: **it's under costruction and based on personal use.**<br>
<br>
A simple flow for installation of ex asset for cordova<br>
It's based on windows/linux workflow<br>
<br>

---

### - Install **Andriod Assets**:

<br>

- install Java JDK :<br>

  - get the windows/linux [installer resource](https://www.oracle.com/java/technologies/downloads)<br>
  - open env java on windows: <br>
    open setting on search type "*var*" click on set variable, add<br>
    `%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools`<br>
    `%USERPROFILE%\AppData\Local\Android\Sdk\cmdline-tools\latest\bin`<br>
    `%USERPROFILE%\AppData\Local\Android\Sdk\tools\emulator`<br><br>

- install grandle:

  - on linux/mac: <br>
    get it on: https://gradle.org/install/ and open env with: *Step 3. Configure your system environment*

  - in windows: copy https://gradle.org/next-steps/?version=7.3.1&format=bin into C:\Program Files\Gradle\bin (or simple C: Grandle) and open env with:<br>

    open setting on search type "*var*" click on set variable, add "*C:\ YOURPATH Gradle\bin*" on *PATH*
    

- open terminal and verify:<br>
  :: `java -version` <br>
  :: `gradle -v`<br>

<br>

### - Install **IOS Assets**:

<br>

> *Although it's only for compiling, I would recommend an hackintosh on a dedicated partition due the poor performance of vm. However...*

<br>

- Follow Installation [macos-virtualbox-installation-flow](https://github.com/bertz-tech/macos-virtualbox-installation-flow)<br>

- Update system on latest version (BigSur1.1.3 or Monteray)<br>

- now install [xcode](https://cordova.apache.org/docs/en/10.x/guide/platforms/ios/index.html#installing-the-requirements) via apple store<br>

- Sync in your VSCode or Atom and other (exemple your browser)<br>

- now install cordova on mac:<br>
  > install node and npm https://treehouse.github.io/installation-guides/mac/node-mac.html<br>
  > :: 'sudo npm install -g cordova'<br>
  > ... coming soon<br>

<br>

### - Install **Cordova Assets**: 

<br>

node js installation:<br>

- on windows: <br>

  ​		[get NVM](https://docs.microsoft.com/it-it/windows/dev-environment/javascript/nodejs-on-windows) and run command:<br>		:: `nvm install node` or `nvm install --lts`<br>		after install:<br>		:: `nvm use --lts`<br>		or run [Node Installer](https://nodejs.org/it/)<br>
  ​		Check node istallation:<br>		:: `node -v`<br>		check if NPM is installed:<br>
  ​		:: `npm -v` <br>		if not installer run command:
  ​		:: `npm install -g npm@latest`<br>

  on linux:<br>

  ​	coming soon<br><br><br>
  
- Now cordova assets:<br>
			:: `npm install -g cordova`<br>
			see all warning of audit fix, if you can...<br>
			:: `npm audit fix` <br>
			after repair all deprecated, check cordova<br>
			:: `npm cordova -v`<br><br><br>

- first app:<br>
  in project folder run:<br>
  :: `cordova create MYPROJECT com.MYPROJECT HelloWorld`<br>
  add platforms in your project:<br>
  :: `cordova platform add browser`<br>
  :: `cordova platform add ios`<br>
  :: `cordova platform add android`<br><br><br>

- first adds:<br>
  note: in theory the_ "--save"_ is deprecated; if _"-dev"_ not work try _"--production=false"_;

  - install [browser sync 2](cordova plugin add cordova-plugin-browsersync-gen2) for --live-reload: <br>
    :: `cordova plugin add cordova-plugin-browsersync-gen2 --save-dev`<br>
    rapid check... run cordova web server:<br>:: `cordova run --live-reload`<br>
  - install [files](https://github.com/apache/cordova-plugin-file/)<br>
    :: cordova plugin add cordova-plugin-file <br>
  - install [battery status](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-battery-status/) <br>:: cordova plugin add cordova-plugin-battery-status
  - install [Plug-Device](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-device/) <br>
    :: cordova plugin add cordova-plugin-device <br>
  - install [Net Info](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-network-information/) <br>::  cordova plugin add cordova-plugin-network-information<br>
  - install [Geo Localization](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-geolocation/) <br>:: cordova plugin add cordova-plugin-geolocation <br>
  - install [Policy Parse](https://npm.io/package/csp-parse) <br>
    :: npm install csp-parse<br>
  - install [Cordova Cache](https://www.npmjs.com/package/cordova-plugin-cache) <br>:: npm i cordova-plugin-cache
  - if necessary install [Whitelist](https://github.com/apache/cordova-plugin-whitelist) <br>
    :: cordova plugin add cordova-plugin-whitelist <br>

  - install [Vibration](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-vibration/) <br>:: cordova plugin add cordova-plugin-vibration <br><br><br>

<br>... in arrived
