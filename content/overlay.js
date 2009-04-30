var changeProfile = {
  change: function () {
    var fxDir = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("CurProcD", Components.interfaces.nsIFile);
    var fx = fxDir;
    var os = navigator.platform.toLowerCase();

    if (os.match(/^win/)) {
      fx.append("firefox.exe");
    } else if (os.match(/^mac/)) {
      fx.append("firefox-bin");
    } else if (os.match(/^linux/)) {
      fx.append("firefox");
    } else {
      alert("Is this Firefox?");
      return;
    }

    var process = Components.classes["@mozilla.org/process/util;1"].getService(Components.interfaces.nsIProcess);
    var args = ["-P", "-no-remote"];
    process.init(fx);
    process.run(false, args, args.length);
    window.setTimeout(goQuitApplication, 500);
  }
};
