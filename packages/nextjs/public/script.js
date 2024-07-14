(function (d, t) {
  var v = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  v.onload = function () {
    window.voiceflow.chat.load({
      verify: { projectID: "6691ab84a895a5bd4f79076c" },
      url: "https://general-runtime.voiceflow.com",
      versionID: "production",
    });
  };
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
})(document, "script");
