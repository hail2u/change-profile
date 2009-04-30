var changeProfile = {
  change: function () {
    var fxDir = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("CurProcD", Components.interfaces.nsIFile);
    var fx = fxDir;
    var os = this.getOSName();

    switch (os) {
      case "winnt":
        fx.append("firefox.exe");
        break;

      case "darwin":
        fx.append("firefox-bin");
        break;

      case "linux":
        fx.append("firefox");
        break;

      default:
        alert("Is this Firefox?");
        return;
    }

    var process = Components.classes["@mozilla.org/process/util;1"].getService(Components.interfaces.nsIProcess);
    process.init(fx);
    process.run(false, ["-P", "-no-remote"], 2);
    window.setTimeout(goQuitApplication, 1000);
  },

  getOSName: function () {
    var xulRuntime = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime);

    return xulRuntime.OS.toLowerCase();
  }
};
