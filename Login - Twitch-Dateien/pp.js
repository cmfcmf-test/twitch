(function () {
  PP = window.PP || {};
  PP.geo = "DE";
  PP.turbo = "";
  PP.login = "";
  PP.display_name = "";


  var is_admin = false;
  var is_subadmin = false;
  var is_owner = false;

  var login = "";

  function show(className) {
      document.write("<style>." + className + " { display:block !important; }</style>");
  }

  function hide(className) {
      document.write("<style>." + className + " { display:none !important; }</style>");
  }

  if (login) {
    show("require_logged_in");
    hide("require_logged_out");
  } else {
    show("require_logged_out");
    hide("require_logged_in");
  }

  if (!PP.turbo) {
    show("require_no_turbo");
  } else {
    hide("require_no_turbo");
  }

  if(is_owner){
      show("owner_only");
      hide("show_owner");
  } else {
      show("show_owner");
      hide("owner_only");
  }
  if(is_owner || is_admin){
      show("admin-and-owner-only");
  } else {
      hide("admin-and-owner-only");
  }
  if(is_admin || is_subadmin){
      show("admin-and-subadmin-only");
  } else {
      hide("admin-and-subadmin-only");
  }
  if(is_admin || is_subadmin || is_owner){
      show("admin-subadmin-and-owner-only");
  } else {
      hide("admin-subadmin-and-owner-only");
  }
})();
