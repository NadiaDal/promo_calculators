import  generalOptions  from './generalOptions';

class Helper{
    constructor(){}

    sortList($inputElement, $services) {
        let filter = $inputElement.value.toUpperCase();
        for (let service of $services){
            let serviceText = service.innerHTML.toUpperCase();
            if (serviceText.indexOf(filter) > -1) {
                service.style.display = "";
            } else service.style.display = "none";
        }
    }
    inputLengthFilter(string, max=20, sliceTo=15){
        let filteredString = (string.length > max) ? string.slice(0, sliceTo)+"..." : string;
        return filteredString
    }
    getApiURL(mainDomain) {
        let URL = (this.isDev()) ? `https://devapi.${mainDomain}` : `https://api.${mainDomain}`;
        return URL;
    }
    getMyURL(mainDomain) {
        let URL = (this.isDev()) ? `https://devmy.${mainDomain}` : `https://my.${mainDomain}`;
        return URL;
    }

    isDev() {
        let splitedHostname = window.location.hostname.split(".");
        let isDev = (splitedHostname.indexOf('dev') > -1) || (splitedHostname.indexOf('localhost') > -1) || ((splitedHostname.indexOf('185') > -1));
        return isDev;

    }

    getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : '';
    }

    setCookie(cname, cvalue, exdays) {
    var expires;
    if (exdays > 0) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
    } else {
        expires = 0;
    }
    // does not work on localhost
    let newCookie = `${cname}=${cvalue}; ${expires}; path=/; domain=.${generalOptions.hostname}`;
    document.cookie = newCookie;

    };

    isIE(userAgent) {
        userAgent = userAgent || navigator.userAgent;
        return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
    }
}
export let helper = new Helper();