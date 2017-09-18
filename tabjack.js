(function(){

    var timer = null;
    var isSwitched = false;

    window.onblur  = function(){ timer = setTimeout(doChange, 5000); }  
    window.onfocus = function(){ if (timer) clearTimeout(timer);     }

    favicon = {
        docHead: document.getElementsByTagName("head")[0],

        set: function(url){ this.addLink(url); },

        addLink: function(iconURL) {
            var link  = document.createElement("link");
            link.type = "image/x-icon";
            link.rel  = "shortcut icon";
            link.href = iconURL;
            this.removeLinkIfExists();
            this.docHead.appendChild(link);
        },

        removeLinkIfExists: function() {
            var links = this.docHead.getElementsByTagName("link");
            for (var i = 0; i < links.length; i++) {
                var link = links[i];
                if (link.type == "image/x-icon" && link.rel == "shortcut icon") {
                    this.docHead.removeChild(link);
                    return;
                }
            }
        }
    };  

    favicon.set("https://nulldev.org/img/logo.png");

    function switchCont(){
        $(".content").css("display", "none");
        $(".content-x").css("display", "block");
    }

    function doChange(){
        if (isSwitched == false){
            document.title = "Gmail: Email from Google";    
            favicon.set("https://mail.google.com/favicon.ico");
            switchCont();
            isSwitched = true;
        }
    }
})();

$(document).ready(function() { $("#g-send").click(function() { alert("I hope you clicked that button ironically..."); }); });
