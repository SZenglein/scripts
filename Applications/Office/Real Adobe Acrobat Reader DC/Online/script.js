const OnlineInstallerScript = include("engines.wine.quick_script.online_installer_script");
const { getLatestStagingVersion } = include("engines.wine.engine.versions");

const Mspatcha = include("engines.wine.verbs.mspatcha");
const WindowsVersion = include("engines.wine.plugins.windows_version");

new OnlineInstallerScript()
    .name("Adobe Acrobat Reader DC")
    .editor("Adobe")
    .applicationHomepage("https://acrobat.adobe.com/us/en/acrobat/pdf-reader.html?promoid=C4SZ2XDR&mv=other")
    .author("ImperatorS79")
    .wineVersion(getLatestStagingVersion)
    .wineDistribution("staging")
    .url("https://admdownload.adobe.com/bin/live/readerdc_en_a_install.exe")
    .checksum("ff0a8e18d166c0ecf0848dce110770698762e792")
    .category("Office")
    .executable("readerdc_en_a_install.exe")
    .preInstall((wine) => {
        new Mspatcha(wine).go();
    })
    .postInstall((wine) => {
        // fix broken dialogs (e.g. preferences)
        new WindowsVersion(wine).withWindowsVersion("winxp").go();
    });
