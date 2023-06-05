let translate_wrapper = `<div class="gtranslate_wrapper"></div>`;
let translate_script = `<script>window.gtranslateSettings = {"default_language":"en","detect_browser_language":true,"languages":["en","zh-CN","zh-TW","ru","es"],"wrapper_selector":".gtranslate_wrapper","flag_size":16,"switcher_horizontal_position":"right","switcher_vertical_position":"top","alt_flags":{"en":"usa"}}</script>
<script src="https://portal.claritybenefitsolutions.com/wp-content/plugins/clarity-portal/includes/3rdparty/gtranslate/dwf-modified.js" defer></script>`;
$('body').append(translate_wrapper);
$('head').append(translate_script);

function addStyle(){
    var style = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" media="all"><style>'+
        '*, *:after, *:before{box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box;}'+
        'body, html{padding: 0; margin: 0;}'+
        'body{font-family: "Open Sans", sans-serif; font-size: 14px; line-height: 1.42857143; color: #333; background-color: #1c478a;}'+
        'a{color: #689E5C;}'+
        'a:hover{text-decoration: none; color: #333;}'+
        'img{max-width: 100%; height: auto;}'+
        '.loginFrame{padding:20px; margin:30px auto; background-color: #fff; width: 90%;}'+
        '.loginInner{/*max-width: 400px;*/ margin: 0 auto; text-align: center; font-size: 14px; color: #838383;}'+
        '.loginLogo{margin-bottom: 30px;text-align: center;}'+
        '.loginLogo img{max-height: 59px;}'+
        '.signinForm{max-width: 300px; margin: 20px auto;}'+
        '.signinForm h2{font-size: 16px; font-weight: 400; color: #333; margin-bottom: 20px;}'+
        '.forminput{background-color: #fff; padding: 15px 20px; border: 1px #E7E6E6 solid; height: 49px; font-size: 16px; color: #333; width:100%;}'+
        '.forminput:focus{border-color: #65bc7b; outline: none;}'+
        '.forgottext{text-align: center; margin-bottom: 20px; margin-top: 0;}'+
        '.form-group{margin-bottom: 15px!important;}'+
        '.loginBtn{font-size: 10px; font-family: "PT Sans", sans-serif; font-weight: 700; padding: 8px 20px; text-transform: uppercase; min-width: 120px; color: #fff; height: 30px;'+
        'background: #93c482;'+
        'background: -moz-linear-gradient(top,  #93c482 0%, #649859 100%);'+
        'background: -webkit-linear-gradient(top,  #93c482 0%,#649859 100%);'+
        'background: linear-gradient(to bottom,  #93c482 0%,#649859 100%);'+
        'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#93c482", endColorstr="#649859",GradientType=0 );'+
        'border:1px #b0c77a solid; -webkit-box-shadow: inset 0px 1px 2px 1px rgba(255,255,255,0.3);'+
        '-moz-box-shadow: inset 0px 1px 2px 1px rgba(255,255,255,0.3);'+
        'box-shadow: inset 0px 1px 2px 1px rgba(255,255,255,0.3); text-shadow: 0 2px 2px rgba(0,0,0,0.2);}'+
        '.loginBtn:hover, .loginBtn:focus{background: #93c482; outline: none; cursor: pointer;}'+
        '.protectInfo{background-color: #eaeae9; padding: 15px 20px;}'+
        '.grayBtn{display:inline-block;text-decoration:none;background:#cfd0ce;background:-moz-linear-gradient(top,#cfd0ce 0,#a9aba9 100%);background:-webkit-linear-gradient(top,#cfd0ce 0,#a9aba9 100%);background:linear-gradient(to bottom,#cfd0ce 0,#a9aba9 100%);border:1px #c8c8cd solid}'+
        '.grayBtn:focus,.grayBtn:hover{background:#cfd0ce;color:#fff}.registerLink,.logintoadp{/*margin-top:30px*/}.registerLink p, .logintoadp p{margin:0 0 8px}'+
        '@media (min-width:768px){.loginFrame{max-width:720px}.loginFrame{padding:35px 20px}}'+
        '@media (min-width:641px){.protectInfo{padding:15px 50px}.loginFrame{/*margin:100px auto*/}.signinForm{margin:20px auto}.loginLogo{margin-bottom:30px}}'+
        '.loginBtn.grayBtn{background: #286ca8!important; background: -moz-linear-gradient(top,  #286ca8 0%, #024885 100%)!important;background: -webkit-linear-gradient(top,  #286ca8 0%,#024885 100%)!important;background: linear-gradient(to bottom,  #286ca8 0%,#024885 100%)!important;filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#286ca8", endColorstr="#024885",GradientType=0 )!important;border:1px #528fc4 solid!important;}.loginBtn.grayBtn:hover, .loginBtn.grayBtn:focus{background: #286ca8!important;}'+
        ".errorMessage li span{color: #ff0000;font-size: 16px;}.custom-button{font-size:10px;font-family:'PT Sans',sans-serif;font-weight:700;padding:8px 20px;text-transform:uppercase;min-width:120px;color:#fff;height:30px;background:#93c482;-webkit-box-shadow:inset 0 1px 2px 1px rgba(255,255,255,.3);-moz-box-shadow:inset 0 1px 2px 1px rgba(255,255,255,.3);box-shadow:inset 0 1px 2px 1px rgba(255,255,255,.3);text-shadow:0 2px 2px rgba(0,0,0,.2)}.custom-button:focus,.custom-button:hover{background:#93c482;outline:0;cursor:pointer}"+
        '#show_password i{font-size: 20px;}#show_password{display: inline-block;position: absolute;margin-left: -25px;z-index: 99999;margin-top: 15px;}#passwordspan{display: inline-block;width: 100%;}</style>';

    $("head").prepend(style);
}

function addOTPStyle(){
    var style = '<style>'+
        "body.modal-open{font-family:'Open Sans',sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#1c478a}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.in{display:block}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-title{margin:0;line-height:1.42857143}h4.modal-title{font-size:18px}.modal.in .signinForm{max-width:inherit;margin:0}.modal-body{position:relative;padding:15px 30px}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;color:inherit}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5}.pull-right{float:right!important}.form-control{background-color:#fff;padding:15px 20px;border:1px #e7e6e6 solid;height:49px;font-size:16px;color:#333;width:92%}.form-control:focus{border-color:#65bc7b;outline:0}.modal-footer{padding:15px;text-align:center;border-top:1px solid #e5e5e5}.btn{font-size:12px;font-family:'PT Sans',sans-serif;font-weight:700;padding:8px 20px;text-transform:uppercase;min-width:120px;color:#fff;height:30px}.btn-primary{background:#93c482;background:-moz-linear-gradient(top,#93c482 0,#649859 100%);background:-webkit-linear-gradient(top,#93c482 0,#649859 100%);background:linear-gradient(to bottom,#93c482 0,#649859 100%);border:1px #b0c77a solid;-webkit-box-shadow:inset 0 1px 2px 1px rgba(255,255,255,.3);-moz-box-shadow:inset 0 1px 2px 1px rgba(255,255,255,.3);box-shadow:inset 0 1px 2px 1px rgba(255,255,255,.3);text-shadow:0 2px 2px rgba(0,0,0,.2)}.btn-primary:focus,.btn-primary:hover{background:#93c482;outline:0;cursor:pointer}.btn-default{display:inline-block;text-decoration:none;background:#cfd0ce;background:-moz-linear-gradient(top,#cfd0ce 0,#a9aba9 100%);background:-webkit-linear-gradient(top,#cfd0ce 0,#a9aba9 100%);background:linear-gradient(to bottom,#cfd0ce 0,#a9aba9 100%);border:1px #c8c8cd solid}.btn-default:focus,.btn-default:hover{background:#cfd0ce;color:#fff}.actionMessage{list-style:none;margin:0;padding:0 20px 0 0}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}}#validateIdentityForm .form-control{padding:5px 20px}#validateIdentityForm .row.top-bottom-buffer{margin-top:15px;margin-bottom:15px;overflow:hidden}#validateIdentityForm .row.top-bottom-buffer .col-md-2{width:25px;float:left}#validateIdentityForm .row.top-bottom-buffer .col-md-10{width:calc(100% - 25px);float:left}.errorMessage li span{color: #ff0000;font-size: 16px;}.btn.mo-btn-primary.btn-cnfrm{background: linear-gradient(to bottom,#567bb4 0,#1c478a 100%);border-color: #476ea9}"+
        '</style>';

    $("head").prepend(style);
}

function chatBotScript(){
    var scriptchat = document.createElement('script');
    scriptchat.type = 'text/javascript';

    scriptchat.src = 'https://service.force.com/embeddedservice/5.0/esw.min.js';
    //$("body").prepend(scriptchat);
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
        
        embedded_svc.settings.chatbotAvatarImgURL = 'https://claritybenefitsolutions--c.na153.content.force.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Png&versionId=0685G00000sAQ4I&operationContext=DELIVERY&contentId=05T5G00002to27e&page=0&d=/a/5G000000vFjm/pGsrD6L4gLj7EPIFAQPUgIAj4o_2SyB4_ZwRrd25Wg8&oid=00Df4000003kFDv&dpt=null&viewId=';
        embedded_svc.settings.defaultMinimizedText = 'Participant Chat'; //(Defaults to Chat with an Expert)
            
        //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
        //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

        //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
        //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

        // Settings for Chat
        //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
            // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
            // Returns a valid button ID.
        //};
        //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
        //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
        //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)
        
        //PreChat -> LiveChatTranscript
            embedded_svc.settings.extraPrechatFormDetails = [
                {
                  "label": "First Name",
                  "value": "",
                  "displayToAgent": true
                },
                {
                  "label": "Last Name",
                  "value": "",
                  "displayToAgent": true
                },
                {
                  "label": "Email",
                  "value": "",
                  "displayToAgent": true
                },
                {
                  "label": "Subject",
                  "value": "",
                  "displayToAgent": true
                }/*,                
                {
                    "label":"Tracking Number",
                    "value": "000",
                    "transcriptFields": ["Tracking_Number__c"]
                }*/
            ];
            //
        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.init(
            'https://claritybenefitsolutions.my.salesforce.com',
            'https://claritybenefitsolutions.force.com',
            gslbBaseURL,
            '00Df4000003kFDv',
            'Test_Knowledge_Chat_Group',
            {
                baseLiveAgentContentURL: 'https://c.la3-c2-ia4.salesforceliveagent.com/content',
                deploymentId: '5725G0000001P9A',
                buttonId: '5735G0000001PyE',
                baseLiveAgentURL: 'https://d.la3-c2-ia4.salesforceliveagent.com/chat',
                eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I5G000000CflSUAS_1853e023e2f',
                isOfflineSupportEnabled: false
            }
        );
    };

    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', 'https://claritybenefitsolutions.my.salesforce.com/embeddedservice/5.0/esw.min.js');
        s.onload = function() {
            initESW(null);
        };
        document.body.appendChild(s);
    } else {
        initESW('https://service.force.com');
    }
}
function chatBotStyle(){
    var chatbotcss = '<style>.embeddedServiceHelpButton .helpButton .uiButton {background-color: #005290;font-family: "Arial",sans-serif;}.embeddedServiceHelpButton .helpButton .uiButton:focus {outline: 1px solid #005290;}.embeddedServiceLiveAgentStateChatItem.chatMessage button {font-size: 0.875em;}.embeddedServiceLiveAgentStateChatMenuMessage .rich-menu-items, .embeddedServiceLiveAgentStateChatMenuMessage .rich-menu-items li{background-color: aliceblue;font-family: var(--lwc-fontFamily,),sans-serif;}.embeddedServiceLiveAgentStateChatMenuMessage .rich-menu-itemOptionIsClicked {background-color: #ffffff !important;}.embeddedServiceLiveAgentStateChatMenuMessage .rich-menu {border-radius: 3px;margin: auto;width: 100%;background-color: #fff;}.field-element {padding-left:10px;}.slds-form-element__help {color: var(--lwc-colorTextError, #c23934);font-size: var(--lwc-fontSizeSmall, 0.75rem);}.errorContent[flowruntime-errorContent_errorContent] {color: var(--lwc-colorTextError, #c23934);font-size: var(--lwc-fontSizeSmall, 0.75rem);}.flowruntime-input-error {color: var(--lwc-colorTextError, #c23934);font-size: var(--lwc-fontSizeSmall, 0.75rem);}.slds-scope .footerContainer .slds-grid .slds-grid_align-spread {text-align:center;padding:5px;}.footerContainer {text-align:center;padding:5px;}.chatMessage.agent.richText h4 {font-size: 16px;}.sidebarHeader[embeddedService-chatHeader_chatHeader], .embeddedServiceHelpButton .helpButton .uiButton {background-color: #005290 !important;}.embeddedServiceSidebarMinimizedDefaultUI {background-color: #005290 !important;border: none;}.chatMessage p {margin-top: 0px;margin-bottom:0px;}</style>';
    $("head").prepend(chatbotcss);
}
$(document).ready(function () {
    //console.log('URL----->', window.location);

    /*Code added by Rahul S. on 6 04 21*/
    window.onbeforeunload = function() {
        console.log('here');
        window.location = 'https://portal.claritybenefitsolutions.com/?option=saml_user_login';
        // window.location = 'https://www.login.claritybenefitsolutions.com/moas/idp/oidc/logout?post_logout_redirect_uri=https%3A%2F%2Fportal.claritybenefitsolutions.com%2F';
    };
    /*End Code added by Rahul; S.*/
    
    /* Code added by Ankush 12 jan, 2022 */
    if (window.location.href.includes("JSESSIONID=")) {
        window.location = "https://portal.claritybenefitsolutions.com/?option=saml_user_login";
    }
    /* End Code added by Ankush */
    if(window.location.href=='https://www.login.claritybenefitsolutions.com/moas/idplogin' || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/login'){
        console.log("if referrer empty 1");
        //console.log("uncommented code commented by MO team");
        if(document.referrer==""){
            console.log("if referrer empty 2");
            window.location = 'https://portal.claritybenefitsolutions.com/?option=saml_user_login';
        }


        var otpMessage = $('.actionMessage li span').text();
        if(document.body.innerHTML.search("Error processing your request. Please try again.")>0){

            window.location = "https://portal.claritybenefitsolutions.com/?option=saml_user_login";

        }
        if(otpMessage.search('The OTP has been sent to')>0){
            $('.alert').remove();
        }
    }
    
    
    if(window.location.href=='https://www.login.claritybenefitsolutions.com/moas/enduserwelcome'){
        window.location.href='https://portal.claritybenefitsolutions.com';
    }else{
//Add link for forgot password page in the below variable
        let frgtUsername = '<p class="forgottext" style="padding-top: 15px;">Trouble logging in? <a href="https://portal.claritybenefitsolutions.com/forgot-username/">Forgot Username?</a> <br><a href="https://portal.claritybenefitsolutions.com/reset-password/">Forgot Password?</a></p>';
//let greyblock = "<p class='protectInfo'>To protect your personal information, we collect your password on a separate page.</p>";
//Add link for signup page in the below variable
        let register = "<div class='registerLink'><a href='https://portal.claritybenefitsolutions.com/register' class='loginBtn grayBtn'>REGISTER</a></div>";
//
//NOTE: This code will work only for broker flow. If, by any chance, user goes to login page or samlprovider, the page would design will get dirupted.
//In that case, it is adviced to put the whole code from line number 51 to 83 inside the if block. You can do it once it is tested.
// if($("form[action='/moas/idplogin']").length>0){
//
// }

        let loginToADP = '<p class="logintoadp"><a href="https://portal.claritybenefitsolutions.com/login-help">Login with ADP</a></p>';

        $("link[rel=stylesheet]").remove() , $("hr").remove(), $("br").remove();
        if(
            window.location.href=='https://www.login.claritybenefitsolutions.com/moas/validateidentity'
            || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/verifyidentity'
            || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/idp/initiaterba'
            || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/idp/validatepassword'
            || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/validatepassword'
            || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/resendidpotp'
            || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/validatechallenge'
            || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/validaterbachallenge' 
            || window.location.pathname=='/moas/idp/initiaterba'
            || window.location.pathname=='/moas/resendbrokerotp' 
        ) {
            addOTPStyle();
            $("#modal-footer").children('button').attr('id','cancel-btn');
            $( "#validate" ).insertAfter( "#cancel-btn" );
            $("#cancel-btn").css("margin-right","10px");
            $("h4").text("Verify Your Email").css("text-align","center");
            $('#registeredProfileName').hide();
            var str = $('.actionMessage li span').text();
            var pos = str.search("Please");
            str.substring(25,pos-2);
            if($(".actionMessage").children().children().text()){
                var temp = $(".actionMessage").children().children().text();
                var pos = temp.search("Please");
                //added by Ambar Bidkar on 2 may - issue has been resolved ( email was not getting picked )
                // var email = temp.substring(25,pos-2);
                var emailRegex = /[\w-]+@[\w-]+\.[\w-]+/;
                var email = temp.match(emailRegex)[0];
                //End of added by Ambar Bidkar on 2 may

                //if phone is empty
                if(temp.includes("your Phone:  and Email")){
                    var x = email.indexOf('Email');
                    var email = email.substring(x+6);
                }
                $(".actionMessage").children().children().text("You're almost there! We just need to verify your email address. A One-Time Passcode (OTP) has been sent to "+email+". Please check your email for this code and enter it below.");
            }
            $("#otpToken").attr("placeholder","Enter OTP Here");
            $('.alert-success').css('background-color','#ececec');
            $('.alert-success').css('color','#000000');
            $("#cancel-btn").attr("onClick",null);
            $("#cancel-btn").click(function(){
                window.location.href = 'https://www.login.claritybenefitsolutions.com/moas/idp/oidc/logout?post_logout_redirect_uri=https%3A%2F%2Fportal.claritybenefitsolutions.com%2F';
            });

            //added by Kunal Patil on 19 may - issue has been resolved ( text change  )
            $($('#otpToken').parent()).children("a").text('Did not receive OTP? Resend OTP');
            //End of added by Kunal Patil on 19 may

        }else{
            addStyle();

            $("head").append("<link href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' rel='stylesheet' type='text/css'>");

            $("#login-body").addClass('loginFrame');
            $("#login-wrapper").parent().addClass('loginInner');
            $("form").addClass('signinForm');
            // $(".login-form").prepend("<h2>Sign in</h2>");

            // added by rahul soni on 24 March
            $(".login-header").before('<div style="font-weight: 600;font-size: 20px;color: #000;padding-bottom: 15px;">Welcome to the Clarity Benefit Solutions Portal!</div>')
            $('#passwordspan input').after('<div style="color: #000;font-size: 11px;padding-bottom: 20px;font-weight: 600;`font-style: italic;">We will maintain the confidentiality of your personal information in accordance with our privacy policy</div>')
            $('#loginbutton').attr('value', 'LOGIN');
            // End of added by rahul soni on 24 March


            $("#login-header").addClass('loginLogo');
            $('#login-wrapper').children('.login-header').text('Providing access to all your Clarity activities in one place - simplified, streamlined and secure.').css('color','#000');

            $("#username").removeAttr('class');
            $("#username").attr("placeholder","Username");
            $("#username").attr("oninput","this.value = this.value.toLowerCase()");
            $("#username").addClass('forminput form-group');

            $("#plaintextPassword").removeAttr('class');
            $("#plaintextPassword").attr("placeholder","Password");
            $("#plaintextPassword").addClass('forminput form-group');

            $(frgtUsername).insertAfter('#loginbutton');

            $("#passwordspan").after('<div id="show_password"><i title="Show Password" class="fa fa-eye hide-show-eye" id="toggle_password_show"></i><i title="Hide Password" style="display: none" class="fa fa-eye-slash hide-show-eye" id="toggle_password_hide" aria-hidden="true"></i></div>');
            // when eye icon is clicked for password field
            $('#toggle_password_show').click(function () {
                try {
                    var input_element = $('#plaintextPassword');
                    input_element.attr('type', 'text');
                    jQuery('#toggle_password_show').hide();
                    jQuery('#toggle_password_hide').show();
                } catch ( err ) {
                    console.error(err);
                }
            });

            $('#toggle_password_hide').click(function () {
                try {
                    var input_element = $('#plaintextPassword');
                    input_element.attr('type', 'password');
                    jQuery('#toggle_password_show').show();
                    jQuery('#toggle_password_hide').hide();
                } catch ( err ) {
                    console.error(err);
                }
            });

            $('#loginbutton').removeAttr('style');
            $('#loginbutton').addClass("loginBtn");

//$(greyblock).insertAfter("form");
            $(register).insertAfter("form:first");
            // below line is added by rahul
            $('.registerLink a').after('<div style="font-size: 10px;color: #ff0000;padding-top: 10px;font-weight: 600;">If you have not logged in here before, please REGISTER your profile and and set up a new username and password.</div>');
// $(loginToADP).insertBefore(".registerLink");

//$(register).insertAfter(".protectInfo");

            if(window.location.href=='https://www.login.claritybenefitsolutions.com/moas/idp/resetpassword' || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/validatepassword' || window.location.href=='https://www.login.claritybenefitsolutions.com/moas/idp/resetuserpassword'){
                $('#login-header').insertBefore('.loginInner');
            }

            $('#forgotPasswordUrl').parent().parent().next().remove();
            $('#login-wrapper').children('.row').remove();
        }
    }
    chatBotStyle();
    chatBotScript();
});