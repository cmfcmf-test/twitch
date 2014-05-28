Twitch.action("about_us#index",function(e){e(".js-staff").tipsy({gravity:e.fn.tipsy.autoNS,fade:!0,opacity:1})}),function(e,t){e.action("archive#new",function(e){initializeLegacyColumns()}),e.action("archive#show",function(e){initializeLegacyColumns(),n()}),e.action("archive#popout",function(e){n()}),e.action("archive#show",function(t){e.tracking.gaq.trackChannelPageView(PP.channel,"/broadcast/"+PP.archive_id,PP.channel_meta_game)}),e.action("archive#admin_list",function(t){t("#chanopts").popup(t("#actions")),e.user.login()===PP.channel&&t("#chanopts").hide(),t("#channel_follow").followbutton({success:function(){t("#channel_follow").hide(),t("#channel_following").show(),t("#channel_unfollow").show()},error:function(){t("#channel_following").hide(),t("#channel_follow").show(),t("#channel_unfollow").hide()}}),t("#channel_unfollow").followbutton({method:"unfollow",success:function(){t("#channel_unfollow").hide(),t("#channel_following").hide(),t("#channel_follow").show()},error:function(){t("#channel_unfollow").show(),t("#channel_following").show(),t("#channel_follow").hide()}}),t("#channel_report").click(function(e){e.preventDefault();if(!PP.login){t.login({mpSourceAction:"channel-report"});return}t("body").overlay("/"+PP.channel+"/report_form",function(e){t("#subwindow_close").click(function(e){e.preventDefault(),t(this).trigger("overlay.hide")})},{width:"400px"})}),t(".js-bookmark-delete").on("click",function(){var n=t(this).closest(".bookmark");e.api.del(t(this).data("href")),n.remove(),e.notify.alert("Bookmark deleted")})});var n=function(){e.player.ready(function(n){n.on("popout",function(t){e.video.archive.togglePopout(t.startTimeInSecs)}),n.on("adCompanionRendered",function(e){isGoogleCompanionAd(e.provider)&&googleCompanionAdExists()});var r=e.player.parseTimeOffset(URI.parseQuery(window.location.search).t),i=r>0;n.on("videoLoaded",function(e){i&&(i=!1,n.videoSeek(r))}),n.on("loginRequest",function(){t.login({mpSourceAction:"player"}),n.fullscreen(!1)})})}}(Twitch,jQuery),function(e,t){e.action("bookmark#show",function(e){initializeLegacyColumns(),n()});var n=function(){e.player.ready(function(n){n.on("popout",function(t){e.video.archive.togglePopout()}),n.on("adCompanionRendered",function(e){isGoogleCompanionAd(e.provider)&&googleCompanionAdExists()});var r=e.player.parseTimeOffset(URI.parseQuery(window.location.search).t),i=r>0;n.on("videoLoaded",function(e){i&&(i=!1,n.videoSeek(r))}),n.on("loginRequest",function(){t.login({mpSourceAction:"player"}),n.fullscreen(!1)})})}}(Twitch,jQuery),Twitch.action("chat#embed",function(e){document.domain="twitch.tv";var t=function(){e("#chat_lines").css("max-height",e(window).height()-e("#speak").outerHeight(!0)-4+"px"),e("#chat_lines").height(e(window).height()-e("speak").outerHeight(!0)-4+"px"),e(window).width()>299&&e(window).height()>334?e("#small_notice").hide():e("#small_notice").show()};t();if(e("body").hasClass("popout_chat")){var n=_.debounce(t,50);e(window).resize(n)}}),Twitch.action("errors#handle404",function(e){e.fn.typewriter=function(){return this.each(function(){var t=e(this),n=t.text(),r=0,i=0;t.text("");var s=setInterval(function(){r++;while((i=n.charCodeAt(r))<48||i>122)r++;t.text(n.substring(0,r)),r>=n.length&&clearInterval(s)},120)}),this},e(".js-typewriter").typewriter()}),Twitch.action("front_page#front_page",function(e){var t=function(){Twitch.storage.set("mp:source","front_page"),Twitch.storage.set("mp:channel-discovery-index",e(".nav .active").index())};e(".js-carousel-nav").tipsy({gravity:"s"}),e("#signup .birthday_fields select").dropdownify(),e("body").on("click",".js-channel_discovery_link, .js-channel_discovery_desc a",t),e(".game").each(function(t,n){var r={game:e(n).data("game"),index:t,location:"front_page",promoted:e(n).hasClass("promoted-game").toString()};e(n).click(Twitch.tracking.mixpanel.setGameClickVars(r))}),e(".nav a").on("click",function(t){t.preventDefault(),t.stopPropagation(),e(this).data().channel!==undefined&&e.get("/front_page/live_player",{channel:e(this).data().channel}).done(function(t){e(".focus").html(t)});if(e(this).data().game!==undefined){var n="http://ttv-backgroundart.s3.amazonaws.com/",r=n+encodeURI(e(this).data().game)+".jpg";e("#carousel_background img").attr("src",r)}var i=e(this).parent("li").index()+1;e(".items .active").fadeOut("fast",function(){e(this).removeClass("active"),e(this).parent("ul").children("li:nth-child("+i+")").fadeIn("fast"),e(this).parent("ul").children("li:nth-child("+i+")").addClass("active")}),e(".nav .active").removeClass("active"),e(".nav li:nth-child("+i+")").addClass("active"),Twitch.tracking.mixpanel.track_with_swf("frontpage-carousel-click",{carousel_index:i,promotion_was_scheduled:e(this).data("scheduled")?!0:!1,channel:e(this).data("channel"),game:e(this).data("game")})}),e(".content h2 a, a.js-channel_discovery_link, .desc a").on("click",function(t){var n=e(this).parents("li").index()+1,r=e(this).parents("li").data("scheduled"),i=e(this).parents("li").data("channel"),s=e(this).parents("li").data("game");e(this).prop("href")==="http://www.twitch.tv/"+i&&Twitch.tracking.mixpanel.track_with_swf("frontpage-channel-click",{carousel_index:n,promotion_was_scheduled:r?!0:!1,channel:i,game:s})}),Twitch.api.get("streams",{limit:6,sce_platform:"PS4"},{version:3}).done(function(t){_.forEach(t.streams,function(t){var n=ich.fp_psFour(_.extend(t,{channel:t.channel,game:t.game}));e("#psFour-channels").append(n)})}),Twitch.api.get("streams",{limit:6,broadcaster_software:"candybox"},{version:3}).done(function(t){_.forEach(t.streams,function(t){var n=ich.fp_xbOne(_.extend(t,{channel:t.channel,game:t.game}));e("#xbOne-channels").append(n)})}),Twitch.ads.enabled()&&(Twitch.ads.dfp_enabled()&&googletag.cmd.push(function(){SiteOptions.dfp_fp_sizzlestrip&&(e("#sizzle_strip").removeClass("hidden"),googletag.defineSlot(Twitch.ads.dfpSlotPath("sizzle_strip"),[980,250],"sizzle_strip").addService(googletag.pubads())),googletag.pubads().enableSingleRequest(),googletag.enableServices(),Twitch.ads.registerGoogleTags(),SiteOptions.dfp_fp_sizzlestrip&&googletag.display("sizzle_strip")}),Twitch.ads.synchronous_load()||Twitch.ads.fetchAll()),NotificationsTracker.startTracking(),mobileNotification()}),Twitch.action("chapter#show",function(e){initializeLegacyColumns(),Twitch.tracking.gaq.trackChannelPageView(PP.channel,"/highlight/"+PP.chapter_id,PP.channel_meta_game)}),function(e,t){e.action("message#list",function(e){n();var t=function(t,n){t.preventDefault(),e("#message-list input[type=checkbox]").prop("checked",n)};e("#select_all").on("click",function(e){t(e,!0)}),e("#select_none").on("click",function(e){t(e,!1)});var r=function(t){e("#ev").val(t)};e(".batch_btn").on("click",function(){r(e(this).attr("id"))}),e(".message_action.block").each(function(e,t){i(t)})}),e.action("message#show",function(e){n(),e(".message_action.block").each(function(e,t){i(t)})}),e.action("message#new",function(e){n()}),e.action("message#create",function(e){n()});var n=function(){t(".js-messages-link").addClass("selected game_filter"),initializeLegacyColumns(),r()},r=function(){e.api.get("games/top",{limit:10}).done(function(e){_.shuffle(e.top).slice(0,3).forEach(function(e){var n=ich.nav_game({name:e.game.name,channels:e.channels,image:e.game.logo.medium});t("#nav_games ul").append(n)})}),t("#nav_related_streams").hide()},i=function(e){t(e).on("click",function(n){n.stopPropagation(),n.preventDefault(),t.ajax({url:t(e).attr("href"),type:"POST",headers:{"X-Http-Method-Override":t(e).data("methodOverride"),"X-CSRF-Token":t("meta[name='csrf-token']").attr("content")}}).done(function(e){var n=t(e).data("targetUserId");t(".js-"+n).each(function(n,r){t(r).attr("href",t(e).attr("href")),t(r).text(t(e).text()),t(r).data(t(e).data())})})})}}(Twitch,jQuery),Twitch.action("user#reset_password_form",function(e){e(function(){var t=e(".js-reset-form");PasswordStrength.watch(t.find("[name=password]"),t.find("[name=score]"),t.find(".js-password-strength")),t.on("submit",function(){var t=e("#password").val();if(t!==e("#password_confirmation").val())return Twitch.notify.error(i18n("Your passwords do not match.")),!1;if(t.length<5)return Twitch.notify.error(i18n("Your password must be at least 5 characters.")),!1})})}),Twitch.action("search#search",function(e){var t=[{name:"users",count:3},{name:"live",count:3},{name:"broadcasts",count:3}],n=function(e){e=parseInt(e,10);var t=Math.floor(e/3600),n=Math.floor((e-t*3600)/60),r=e-t*3600-n*60;return t<10&&(t="0"+t),n<10&&(n="0"+n),r<10&&(r="0"+r),t+":"+n+":"+r},r=function(t,r){var i,s="search-"+t;if(ich[s])return s==="search-broadcasts"&&r.length&&(r.length=n(r.length)),i=ich[s](r),e("time",i).timeago().attr("title",function(t){return(new Date(Date.parse(e(this).attr("datetime")))).toLocaleDateString()}),i},i=function(n){var i=this,s;s=Object.keys(n.records).some(function(e){return n.records[e].length>0}),s||e(".js-no-results").show(),t.forEach(function(e){var t,s;if(n.records[e.name].length>0){t=n.records[e.name].splice(0,e.count);for(var o=0,u=t.length;o<u;o++)s=r(e.name,t[o]),s.addClass("top-result").appendTo("#st-results-container"),i.registerResult(s,t[o])}}),e(".js-results").removeClass("loading").spin(!1)},s={top:100},o=function(t,n){e(".js-no-results").hide(),e(".js-results").addClass("loading").spin(s)},u=new Date(+(new Date)-186e4),a=e("input#st-search-input");a.swiftypeSearch({resultContainingElement:"#st-results-container",engineKey:"9NXQEpmQPwBEz43TM592",renderFunction:r,preRenderFunction:i,loadingFunction:o,sortField:function(){var e=(new URI).query(!0).sort;if(e==="views")return{broadcasts:"views"};return},searchFields:{live:["name","login","status","game^2"],users:["login","name"],broadcasts:["title","description","game^2","user"]},fetchFields:{live:["thumbnail","profileImage","status","title","game","name","path","profilePath"],users:["name","path","bio","views","followers","profilePath","profileImage"],broadcasts:["thumbnail","title","description","game","user","path","length","views","startTime","profileImage","profilePath","gamePath"]},functionalBoosts:{live:{followers:"logarithmic"},users:{followers:"logarithmic"},broadcasts:{views:"logarithmic"}},filters:{live:{updated_at:"["+u.toISOString()+" TO *]"}}});var f=(new URI).query(!0).query;e("input#query").val(f),a.val(f).submit();var l=function(t){window.history&&window.history.pushState?(history.pushState(null,null,t),e(window).trigger("hashchange")):document.location=t};e("#sorting").on("click",".js-relevance",function(t){t.preventDefault(),e(this).addClass("selected").siblings().removeClass("selected");var n=(new URI).removeQuery("sort");l(n)}).on("click",".js-views",function(t){t.preventDefault(),e(this).addClass("selected").siblings().removeClass("selected");var n=(new URI).addQuery("sort","views");l(n)}),Twitch.ads.enabled()&&Twitch.ads.dfp_enabled()&&(googletag.enableServices(),Twitch.ads.registerGoogleTags())}),Twitch.action("teams#show",function(e){function t(t){e.get(t).done(function(t){e("#team_member_list").replaceWith(t);var n=e("#live_player .swf_container").data("channel");e("#channel_"+n).addClass("js-playing"),e("#streams_spinner").hide()})}Twitch.player.ready(function(t){t.on("viewerCount",function(e){setChannelViewerCount(e.count,e.channel)}),t.on("popout",function(e){toggle_live_player_popout(e.channel)}),t.on("loginRequest",function(){e.login({mpSourceAction:"player"}),Twitch.player.getPlayer().fullscreen(!1)})}),e("#team_member_list .page_data a").live("click",function(n){n.preventDefault(),e("#streams_spinner").show(),t(e(this).attr("href"))}),e("#team_member_list").length>0&&setInterval(function(){t(window.location.pathname+"/live_member_list?page="+(e("#team_member_list").attr("page")||"1"))},25e3),e(".tab").tabify(),e(".multi_select .button").tipsy({gravity:"s"});var n=function(){e(".js-share").popup(e(".js-share-popup"),{side:"left",above:!0})};n(),e(".live.member, .live.member a").on("click",function(t){t.preventDefault(),t.stopPropagation();var r=e(this).closest(".live.member");e.get("/team/switch_live_player"+r.find("a").attr("href")).done(function(t){e(".js-playing").removeClass("js-playing"),r.addClass("js-playing"),e(".js-share-popup").remove(),e("#live_player").replaceWith(t),e(".js-share-popup").appendTo(e("body")),n()})})}),Twitch.action("teams#pax_east",function(e){e("#schedule_tab_wrapper li").tabify(),e(".js-pax-stream").click(function(){e("#live_site_player_flash")[0].loadStream("pax")}),e(".js-pax2-stream").click(function(){e("#live_site_player_flash")[0].loadStream("pax2")}),e(".js-twitch-stream").click(function(){e("#live_site_player_flash")[0].loadStream("twitch")})}),Twitch.action("tokens#show",function(e){var t=i18n("Error encountered when sending SMS");e(".js-request-sms").on("ajax:error",function(e,n,r,i){Twitch.notify.error(t)}).on("ajax:success",function(e,n,r,i){n.success?Twitch.notify(i18n("SMS sent to your registered phone")):Twitch.notify.error(t)}),e(".js-request-sms").click(function(t){t.preventDefault(),t.target===this&&e('a[data-remote="true"]',this).click()})}),function(e){e(document).ready(function(){Twitch.run(e("body").attr("data-page"))})}(jQuery);