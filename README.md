
![CordovaInstall](./resources/banner.png)

---

## INSTALLATION OF CORDOVA (UPDATE 2023)<br>
<br>
A pipelines it's a simple step by step roles for make somethings better.<br>
This file is a simple annotations for custom installation of  basic environment for *cordova + cordova assets + extras*.<br>
<br>
Important note: <b>it's under costruction and based on personal use.</b><br>
<br>
A simple flow for installation of ex asset for cordova<br>
It's based on windows/linux workflow<br>
<br>

---

### - Install **Andriod Assets**:<br>
<sup>[(old way here)](https://www.andreszsogon.com/setting-up-your-environment-for-apache-cordova-apps/)</sup><br>

- install Java JDK (tested on windows) (under test in 2023) : <br>

  - Gradle builder not support java major of v16 so... it's better to install: [JDK v15 installer](https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html)</i><br>
    <sub><sup>get the [latest JDK resource](https://www.oracle.com/java/technologies/downloads/#jdk19-windows) <i>*not recommended</i></sup></sub><br>
  - SDK and tools:
    - ~~[download "Command line tools only"](https://developer.android.com/studio/#downloads) (it's on end of page) and copy it into "%ProgramFiles%\Android\"<br>open cmd (administrator) and enter in folder `cd %ProgramFiles%\Android\cmdline-tools\bin` and get list with <kbd>sdkmanager --list</kbd>, so digit `sdkmanager "platform-tools" "platforms;android-NN"` (NN is latest number you can see)~~
    - [install android studio](https://developer.android.com/studio)
    - [copy Platform Tools](https://developer.android.com/studio/releases/platform-tools) into "%USERPROFILE%\AppData\Local\Android\sdk\" <i>(if not exist, make it)</i>
    -  lounch android studio and finish all standard sdk steps (or bypass it and go on next step)
    -  install android SDK version and build tools from Android Studio:<br>
        - Open AS, click on "more actions">"SDKMANAGER"
        - on left, find "Apparence">"System settings">"Android SDK"
        - select on SDK PLATFORM TAB "Android 10 (api level 29)"
        - select on SDK TOOLS TAB > "Android SDK Build Tools" > "30.0.3"
    
  - in windows: set [JAVA_HOME](https://www.youtube.com/watch?v=D1yv94g1e48) / [article](https://tech.amikelive.com/node-533/how-to-install-java-sdk-on-windows/) (similar to step below)
    - Right click Computer
    - Click the properties
    - Select Advanced System Settings
    - Select Environment Variables:
      - on *SYSTEM VARIABLE* click new and add *ANDROID_SDK_ROOT* and `%LOCALAPPDATA%\Android\sdk` (put below all)
      - ~~on *SYSTEM VARIABLE* click new and add *ANDROID_HOME* and `%LOCALAPPDATA%\Android\sdk` (put below all)~~
      - on *SYSTEM VARIABLE* click new and add *JAVA_HOME* and `%ProgramFiles%\Java\jdk-15.0.2` (latest jdk have high risks of compatibility issue)
      - ~~on *SYSTEM VARIABLE* click new and add *JRE_HOME* and `%ProgramFiles%\Android\Android Studio\jre` (put below all)~~
      - on *SYSTEM VARIABLE* click new and add *_JAVA_OPTIONS* and `-Xmx512M`
      - on *SYSTEM VARIABLE* click on *PATH* and add:
        - `%JAVAHOME%\bin`<br>
        - `%ANDROID_SDK_ROOT%\platform-tools`<br>
        - `%ANDROID_SDK_ROOT%\build-tools\33.0.1`<br>
          if necessary:<br>
        - `%LOCALAPPDATA%\Android\Sdk\tools\emulator`<br>
        - ~~`%LOCALAPPDATA%\Android\Sdk\cmdline-tools\latest\bin`~~
    - open terminal and verify `java -version`

- install gradle binary:

  - on linux/mac: <br>
    get it on: [gradle.org/install "Binary-only"](https://gradle.org/install/) and set it "Linux & MacOS users" on page open env with: *Step 3. Configure your system environment*

  - in windows: [gradle.org/install "Binary-only"](https://gradle.org/install/), rename folder in <i>Grandle</i> and copy it into "%ProgramFiles%\Gradle\bin" (or simple C: Grandle) and...<br>
    - on *SYSTEM VARIABLE* click on *PATH* and add "%ProgramFiles%\Gradle\bin"
    - on terminal enter `cd %ProgramFiles%\Gradle\bin` and verify `gradle -v` 
    - on terminal enter `gradle help --scan` for all dep issue

- ANDROID SDK ASSET (in windows) (under test):<br>
  /!\ NOT GET android 10 for retrocompatibility issue! Remain in 9 (the classic released in cordova installation) and...
  - download and open android studio;
  - click arrow on "More Actions" > SDKManager ([OR ALTERNATIVE: SKD](https://www.youtube.com/watch?v=c7_JxGX8oxc)):
  - open android studio, go to "Android SDK", remove all SKD Platform and check only *Android API 32 (Sv2)* and *Android9(Pie)*
  - now on SDK Tools tab remove all! and check only 3.0.3 version.
  - test it in cleaned, new, cordova app with cordova build android; not recognized? cordova platform add android@7.1.1 and readd the 9.1;

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

  ​		[get NVM](https://docs.microsoft.com/it-it/windows/dev-environment/javascript/nodejs-on-windows) and after reboot if system run command:<br>		:: `nvm install --lts` or `nvm install latest`<br>		after install:<br>		:: `nvm use --lts` or `nvm use latest`<br>		or run [Node Installer](https://nodejs.org/it/)<br>
  ​		Check node istallation:<br>		:: `node -v`<br>		check if NPM is installed:<br>
  ​		:: `npm -v` <br>		if not installer run command:
  ​		:: `npm install -g npm@latest`<br>

  on linux:<br>

  ​	coming soon<br><br><br>

- Now cordova assets:<br>
   	:: `npm i -g cordova` (or npm i -g cordova@10.0.0 or 11.0.0 [or other version](https://www.npmjs.com/package/cordova))<br>
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
    rapid check... run cordova web server:<br>:: `cordova run --live-reload`<br><br>
    ```
      in case of windows security stop: "impossible to execute a script PS1 in Powershell"
      open in admin mode powershell and the system32 folder.
      now write:

      Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

      other option:
        restricted (probably currently)
        unrestricted
        remotesigned (good fo server and cordova)
        allsigned (not raccomended)```

  - install [Policy Parse](https://npm.io/package/csp-parse) <br>
    :: `npm install csp-parse` <br>
  - install [Cordova Cache](https://www.npmjs.com/package/cordova-plugin-cache) <br>
    :: ` npm i cordova-plugin-cache` <br>
  - ~~install [cleartext-traffic](https://www.npmjs.com/package/cordova-plugin-enable-cleartext-traffic)~~<br>
    ~~:: `cordova plugin add cordova-plugin-enable-cleartext-traffic`~~<br>
  - install [files](https://github.com/apache/cordova-plugin-file/)<br>
    :: `cordova plugin add cordova-plugin-file` <br>
  - install [battery status](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-battery-status/) <br>:: `cordova plugin add cordova-plugin-battery-status`
  - install [Plug-Device](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-device/) <br>
    :: `cordova plugin add cordova-plugin-device` <br>
  - install [Net Info](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-network-information/) <br>
    ::  `cordova plugin add cordova-plugin-network-information` <br>
  - install [Globalization](https://github.com/apache/cordova-plugin-globalization) <br>
    ::  `cordova plugin add cordova-plugin-globalization`
  - install [Geo Localization](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-geolocation/) <br>
    :: `cordova plugin add cordova-plugin-geolocation` <br>
  - install [Vibration](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-vibration/) <br>
     :: `cordova plugin add cordova-plugin-vibration` <br>
  - install [Whitelist](https://github.com/apache/cordova-plugin-whitelist) (probably you not need of this after cordova 10) <br>
    :: `cordova plugin add cordova-plugin-whitelist` <br>
  - install [browser](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-inappbrowser/) <br>
     :: `cordova plugin add cordova-plugin-inappbrowser` <br>
     <br>
  - if you can:
     - image comunication fix for android -> [cleartext traffic 1](https://www.npmjs.com/package/cordova-plugin-enable-cleartext-traffic) or [cleartext traffic 2](https://www.npmjs.com/package/cordova-plugin-cleartext) or [Stackoverflow discussion](https://stackoverflow.com/questions/54752716/why-am-i-seeing-neterr-cleartext-not-permitted-errors-after-upgrading-to-cordo)
  - other possible: 
     - [camera](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-camera/index.html) <br>
     - [media capture](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-media-capture/index.html) <br>
     - make a [splashscreen](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/index.html) (not more raccomended) <br>

  <br>

- open you project app folder and check config.xml and set basics inside similar to [demo config.xml](https://github.com/bertz-tech/cordova-installation-flow/blob/main/resources/config.xml) <br> 
    for make all icons see [cordova-icon](https://github.com/AlexDisler/cordova-icon): <br>
    :: `npm install cordova-icon -g` <br>
    
- use [cordova init](https://github.com/bertz-tech/cordova-installation-flow/blob/main/resources/cordova-intializer.js) for launch app and plugin... and  so add [statuts bar](https://github.com/bertz-tech/cordova-installation-flow/blob/main/resources/app-status-bar.html) and [system info](https://github.com/bertz-tech/cordova-installation-flow/blob/main/resources/app-system-info.html) 


- ... waiting next ...<br>

<br>
