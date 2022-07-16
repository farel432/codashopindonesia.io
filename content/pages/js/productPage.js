"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var a = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var a in e) t.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 12)
}([function(e, t, n) {
    window.isEmail = function(e) {
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
    }, t.a = isEmail
}, function(e, t, n) {
    var o = function(e, t, n) {
        $(e).removeClass(t), $(e).addClass(n)
    };
    t.a = function(e) {
        e && ($(".best-deal-label").hide(), CODA.Shop.pricePointOptions = CODA.Shop.getPricePointsByDenom(e), $("img[class='logo']").attr("style", "-webkit-filter: grayscale(100%); filter: grayscale(100%);"), o($("[id^='priceLabel_']"), "price_label", "denom-disabled"), $("[id^='priceInfo_']").text(""), $("[id^='price_']").val(""), $("div[id^='priceLabel_']").text(CODA.Shop.translation.notAvailableForDenom), CODA.Shop.pricePointOptions && $.each(CODA.Shop.pricePointOptions, function(e, t) {
            if ($("#deal_" + t.pricePointPaymentChannel.id).remove(), 1 == t.pricePointPaymentChannel.channelStatus && t.price > 0 || t.channelVariablePrice) {
                if (t.channelVariablePrice) {
                    var n = $("#variableDenomPrice").html();
                    $("#variableDenomPrice").html(CODA.Shop.displayCurrencySymbol), $("#variableDenomPrice").html(n), t.price = CODA.Shop.var.userDenomPrice, t.displayPrice = CODA.Shop.displayCurrencySymbol + CODA.Shop.var.userDenomPrice
                }
                if ($("#priceLabel_" + t.pricePointPaymentChannel.id).text(""), $("#priceLabel_" + t.pricePointPaymentChannel.id).parent().parent().find("img").attr("style", ""), o($("#priceLabel_" + t.pricePointPaymentChannel.id), "denom-disabled", "price_label"), $("#priceLabel_" + t.pricePointPaymentChannel.id).text("".concat(CODA.Shop.translation.priceCap)), $("#priceInfo_" + t.pricePointPaymentChannel.id).html(t.displayPrice), $("#price_" + t.pricePointPaymentChannel.id).val(t.price), $("#price_point_id_" + t.pricePointPaymentChannel.id).val(t.id), t.deal && $("#paymentChannel_" + t.pricePointPaymentChannel.id + " .best-deal-label").show(), "${seller.productUrl}".indexOf(CODA.config.urls.battlenet) > -1) $("#paymentChannel_".concat(CODA.Shop.property.PaymentChannelInfo.smartLiID, " img")).click();
                else if ("${seller.productUrl}".indexOf(CODA.config.urls.cliponyu) > -1) {
                    var a = $("[id^=denomination_]");
                    $.each(a, function(e, t) {
                        $(this).hasClass("active") && 0 == e ? $(".pgold").show().text("+GOLD 5%") : $(this).hasClass("active") && 1 == e ? $(".pgold").show().text("+GOLD 8%") : $(this).hasClass("active") && 2 == e && $(".pgold").show().text("+GOLD 10%")
                    })
                }
                $("#payment-channel__tagline_" + t.pricePointPaymentChannel.id).text(t.pricePointPaymentChannel.tagline)
            } else $("#priceLabel_" + t.pricePointPaymentChannel.id).text(""), o($("#priceLabel_" + t.pricePointPaymentChannel.id), "price_label", "denom-disabled"), null != t.pricePointPaymentChannel.statusMessage && "" != t.pricePointPaymentChannel.statusMessage.trim() ? $("#priceLabel_" + t.pricePointPaymentChannel.id).text(t.pricePointPaymentChannel.statusMessage) : $("#priceLabel_" + t.pricePointPaymentChannel.id).text("".concat(CODA.Shop.translation.notAvailableForDenom)), $("#priceInfo_" + t.pricePointPaymentChannel.id).text(""), $("#price_" + t.pricePointPaymentChannel.id).val(""), $("#price_point_id_" + t.pricePointPaymentChannel.id).val("")
        }))
    }
}, function(e, t, n) {
    window.numbersOnlyField = function() {
        "init" != (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pass") && $("#phoneNumber").keyup(function() {
            this.value = this.value.replace(/[^0-9+]/g, "")
        })
    }, t.a = numbersOnlyField
}, function(e, t, n) {
    window.hideErrorPopup = function() {
        $(".popError").hide()
    }, t.a = hideErrorPopup
}, function(e, t, n) {
    window.boletoRestrictionField = function() {
        "init" != (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pass") && $("#boletoCPFNumber").on("input", function() {
            var e = $(this),
                t = $("#id_no");
            e.val(function(e) {
                var t = e.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
                if (!$.isNumeric(t)) return void $(this).val("");
                for (var n = t.match(/\d{3,11}/g), o = n && n[0] || "", a = [], r = 0, i = o.length; r < i; r += 3) a.push(o.substring(r, r + 3));
                if (a.length) {
                    if (e.length > 11) {
                        var d = a.join(".");
                        return d.substr(0, 11) + "-" + d.substr(12, 14)
                    }
                    return a.join(".")
                }
                return e
            }(e.val())), t.val(e.val().split(".").join("").split("-").join(""))
        })
    }, t.a = boletoRestrictionField
}, function(e, t, n) {
    var o = n(1),
        a = function() {
            return "true" === CODA.Shop.Column.sellerGroup.userEmailRequired ? '<p class="emailOptional">' + CODA.Shop.constant.EMAIL_TEXT + '</p><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"> <div id="name-div" class="mdc-text-field text-field mdc-text-field--outlined margin-width email-focused" data-mdc-auto-init="MDCTextField"> <input type="text" required id="email" name="name" class="mdc-text-field__input"> <div class="mdc-notched-outline mdc-notched-outline--upgraded"> <div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"> <label class="mdc-floating-label" for="text-field-outlined">' + CODA.Shop.translation.emailAddress + '</label> </div><div class="mdc-notched-outline__trailing"></div></div></div></div><div class="email-form-btn-group"> <a href="javascript:submitRequest();" id="mdn-submit" class="mdc-button mdc-button--raised mdc-ripple-upgraded margin-width"><img id="submit-loader" src="' + CODA.Shop.url.AWSHost + '/content/mobile/images/spinner-25x25.gif" alt=""/>' + CODA.Shop.translation.buyNow + '</a> <div class="mdc-form-field"> <div id="mdc-cb" class="mdc-checkbox"> <input type="checkbox" class="mdc-checkbox__native-control" id="ck1"> <div class="mdc-checkbox__background"> <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"> <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"> </path> </svg> <div class="mdc-checkbox__mixedmark"></div></div></div><label for="checkbox-1">' + CODA.Shop.translation.rememberMyDetails + "</label> </div></div>" : '<p class="emailOptional">' + CODA.Shop.constant.EMAIL_TEXT + '</p><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"> <div id="name-div" class="mdc-text-field text-field mdc-text-field--outlined margin-width email-focused" data-mdc-auto-init="MDCTextField"> <input type="text" id="email" name="name" class="mdc-text-field__input"> <div class="mdc-notched-outline mdc-notched-outline--upgraded"> <div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"> <label class="mdc-floating-label" for="text-field-outlined">' + CODA.Shop.translation.emailAddress + '</label> </div><div class="mdc-notched-outline__trailing"></div></div></div></div><div class="email-form-btn-group"> <a href="javascript:submitRequest();" id="mdn-submit" class="mdc-button mdc-button--raised mdc-ripple-upgraded margin-width"><img id="submit-loader" src="' + CODA.Shop.url.AWSHost + '/content/mobile/images/spinner-25x25.gif" alt=""/>' + CODA.Shop.translation.buyNow + '</a> <div class="mdc-form-field"> <div id="mdc-cb" class="mdc-checkbox"> <input type="checkbox" class="mdc-checkbox__native-control" id="ck1"> <div class="mdc-checkbox__background"> <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"> <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"> </path> </svg> <div class="mdc-checkbox__mixedmark"></div></div></div><label for="checkbox-1">' + CODA.Shop.translation.rememberMyDetails + "</label> </div></div>"
        },
        r = function() {
            return "true" === CODA.Shop.Column.sellerGroup.userEmailRequired ? '<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width boletoFullName-focused"data-mdc-auto-init="MDCTextField"><input type="text"required id="boletoFullName"name="boletoFullName"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.fullName + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width boletoCPFNumber-focused"data-mdc-auto-init="MDCTextField"><input type="text"required id="boletoCPFNumber"name="boletoCPFNumber"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.CPFNumber + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><input type="hidden"id="id_no"><label class="emailOptional">' + CODA.Shop.constant.EMAIL_TEXT + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width email-focused"data-mdc-auto-init="MDCTextField"><input type="text" required id="email" name="name"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.emailAddress + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><a href="javascript:submitRequest();"id="mdn-submit"class="mdc-button mdc-button--raised mdc-ripple-upgraded margin-width"style="background-color: #385072;"><img id="submit-loader"src="<%=ResourceBundleUtil.getAWSHost() %>/content/mobile/images/spinner-25x25.gif"alt=""style="display: none;"/>' + CODA.Shop.translation.buyNow + '</a><div class="mdc-form-field"style="float: right;"><label for="checkbox-1">' + CODA.Shop.translation.rememberMyDetails + '</label><div id="mdc-cb"class="mdc-checkbox"><input type="checkbox"class="mdc-checkbox__native-control"id="ck1"><div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark"viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path"fill="none"d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div></div>' : '<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width boletoFullName-focused"data-mdc-auto-init="MDCTextField"><input type="text"required id="boletoFullName"name="boletoFullName"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.fullName + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width boletoCPFNumber-focused"data-mdc-auto-init="MDCTextField"><input type="text"required id="boletoCPFNumber"name="boletoCPFNumber"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.CPFNumber + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><input type="hidden"id="id_no"><label class="emailOptional">' + CODA.Shop.constant.EMAIL_TEXT + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width email-focused"data-mdc-auto-init="MDCTextField"><input type="text" id="email"name="name"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.emailAddress + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><a href="javascript:submitRequest();"id="mdn-submit"class="mdc-button mdc-button--raised mdc-ripple-upgraded margin-width"style="background-color: #385072;"><img id="submit-loader"src="<%=ResourceBundleUtil.getAWSHost() %>/content/mobile/images/spinner-25x25.gif"alt=""style="display: none;"/>' + CODA.Shop.translation.buyNow + '</a><div class="mdc-form-field"style="float: right;"><label for="checkbox-1">' + CODA.Shop.translation.rememberMyDetails + '</label><div id="mdc-cb"class="mdc-checkbox"><input type="checkbox"class="mdc-checkbox__native-control"id="ck1"><div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark"viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path"fill="none"d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div></div>'
        },
        i = function(e) {
            var t = CODA.Shop.translation.mobileNumberLabel.replace("{0}", e);
            return "true" === CODA.Shop.Column.sellerGroup.userEmailRequired ? '<label class="emailOptional">' + t + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width phoneNumber-focused"data-mdc-auto-init="MDCTextField"><input type="tel"required id="phoneNumber"name="phoneNumber"minlength="10"maxlength="14"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.mobileNumberPlaceholder + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><label class="emailOptional">' + CODA.Shop.constant.EMAIL_TEXT + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width email-focused"data-mdc-auto-init="MDCTextField"><input type="text"required id="email"name="name"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.emailAddress + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><a href="javascript:submitRequest();"id="mdn-submit"class="mdc-button mdc-button--raised mdc-ripple-upgraded margin-width"style="background-color: #385072;"><img id="submit-loader"src="<%=ResourceBundleUtil.getAWSHost() %>/content/mobile/images/spinner-25x25.gif"alt=""style="display: none;"/>' + CODA.Shop.translation.buyNow + '</a><div class="mdc-form-field"style="float: right;"><label for="checkbox-1">' + CODA.Shop.translation.rememberMyDetails + '</label><div id="mdc-cb"class="mdc-checkbox"><input type="checkbox"class="mdc-checkbox__native-control"id="ck1"><div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark"viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path"fill="none"d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div></div>' : '<label class="emailOptional">' + t + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width phoneNumber-focused"data-mdc-auto-init="MDCTextField"><input type="tel"required id="phoneNumber"name="phoneNumber"minlength="10"maxlength="14"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.mobileNumberPlaceholder + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><label class="emailOptional">' + CODA.Shop.constant.EMAIL_TEXT + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width email-focused"data-mdc-auto-init="MDCTextField"><input type="text" id="email"name="name"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.emailAddress + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><a href="javascript:submitRequest();"id="mdn-submit"class="mdc-button mdc-button--raised mdc-ripple-upgraded margin-width"style="background-color: #385072;"><img id="submit-loader"src="<%=ResourceBundleUtil.getAWSHost() %>/content/mobile/images/spinner-25x25.gif"alt=""style="display: none;"/>' + CODA.Shop.translation.buyNow + '</a><div class="mdc-form-field"style="float: right;"><label for="checkbox-1">' + CODA.Shop.translation.rememberMyDetails + '</label><div id="mdc-cb"class="mdc-checkbox"><input type="checkbox"class="mdc-checkbox__native-control"id="ck1"><div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark"viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path"fill="none"d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div></div>'
        },
        d = function(e) {
            var t = CODA.Shop.translation.mobileNumberSendSmsLabel.replace("{0}", e),
                n = CODA.Shop.translation.mobileNumberSendSmsPlaceholder.replace("{0}", e);
            return "true" === CODA.Shop.Column.sellerGroup.userEmailRequired ? '<label class="emailOptional">' + t + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width phoneNumber-focused"data-mdc-auto-init="MDCTextField"><input type="tel"required id="phoneNumber"name="phoneNumber"minlength="10"maxlength="14"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + n + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><label class="emailOptional">' + CODA.Shop.constant.EMAIL_TEXT + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width email-focused"data-mdc-auto-init="MDCTextField"><input type="text"required id="email"name="name"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.emailAddress + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><a href="javascript:submitRequest();"id="mdn-submit"class="mdc-button mdc-button--raised mdc-ripple-upgraded margin-width"style="background-color: #385072;"><img id="submit-loader"src="<%=ResourceBundleUtil.getAWSHost() %>/content/mobile/images/spinner-25x25.gif"alt=""style="display: none;"/>' + CODA.Shop.translation.buyNow + '</a><div class="mdc-form-field"style="float: right;"><label for="checkbox-1">' + CODA.Shop.translation.rememberMyDetails + '</label><div id="mdc-cb"class="mdc-checkbox"><input type="checkbox"class="mdc-checkbox__native-control"id="ck1"><div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark"viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path"fill="none"d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div></div>' : '<label class="emailOptional">' + t + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width phoneNumber-focused"data-mdc-auto-init="MDCTextField"><input type="tel"required id="phoneNumber"name="phoneNumber"minlength="10"maxlength="14"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + n + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><label class="emailOptional">' + CODA.Shop.constant.EMAIL_TEXT + '</label><div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><div id="name-div"class="mdc-text-field text-field mdc-text-field--outlined margin-width email-focused"data-mdc-auto-init="MDCTextField"><input type="text" id="email"name="name"class="mdc-text-field__input"><div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label class="mdc-floating-label"for="text-field-outlined"style="font-size: 2.5vw;">' + CODA.Shop.translation.emailAddress + '</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><a href="javascript:submitRequest();"id="mdn-submit"class="mdc-button mdc-button--raised mdc-ripple-upgraded margin-width"style="background-color: #385072;"><img id="submit-loader"src="<%=ResourceBundleUtil.getAWSHost() %>/content/mobile/images/spinner-25x25.gif"alt=""style="display: none;"/>' + CODA.Shop.translation.buyNow + '</a><div class="mdc-form-field"style="float: right;"><label for="checkbox-1">' + CODA.Shop.translation.rememberMyDetails + '</label><div id="mdc-cb"class="mdc-checkbox"><input type="checkbox"class="mdc-checkbox__native-control"id="ck1"><div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark"viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path"fill="none"d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div></div>'
        },
        l = n(4),
        s = n(2),
        c = function() {
            $.cookie("CODA.Shop.Cookie.email") && ($("#email").val($.cookie("CODA.Shop.Cookie.email")), $("#ck1").attr("checked", !0), mdc.textField.MDCTextField.attachTo(document.querySelector(".email-focused")).foundation_.activateFocus())
        },
        u = function() {
            $.cookie("CODA.Shop.Cookie.phoneNumber") && ($("#phoneNumber").val($.cookie("CODA.Shop.Cookie.phoneNumber")), mdc.textField.MDCTextField.attachTo(document.querySelector(".phoneNumber-focused")).foundation_.activateFocus())
        },
        m = function() {
            $.cookie("CODA.Shop.Cookie.boletoCPFNumber") && ($("#boletoCPFNumber").val($.cookie("CODA.Shop.Cookie.boletoCPFNumber")), mdc.textField.MDCTextField.attachTo(document.querySelector(".boletoCPFNumber-focused")).foundation_.activateFocus())
        },
        C = function() {
            $.cookie("CODA.Shop.Cookie.boletoFullName") && ($("#boletoFullName").val($.cookie("CODA.Shop.Cookie.boletoFullName")), mdc.textField.MDCTextField.attachTo(document.querySelector(".boletoFullName-focused")).foundation_.activateFocus())
        },
        p = function(e, t, n, o, p) {
            var D = document.getElementById("email").value;
            if (n)
                if (p) $("#formSection").html(i(t)), window.mdc.autoInit(), Object(s.a)(), c(), u();
                else switch (e) {
                    case 500:
                        $("#formSection").html(r()), window.mdc.autoInit(), Object(l.a)(), c(), C(), m()
                } else o && p ? ($("#formSection").html(d(t)), window.mdc.autoInit(), Object(s.a)(), c(), u()) : ($("#formSection").html(a()), window.mdc.autoInit(), c());
            D ? ($(".mdc-floating-label").addClass("input-existing"), document.getElementById("email").value = D) : $(".input-existing").remove()
        };
    window.selectPaymentChannel = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = $("#variableDenomPrice").html();
        if ($(".no-price-pc").removeAttr("style").removeClass("no-price-pc"), !CODA.Shop.var.variablePrice && "" == $(".price.pr").text()) return $("img[class='logo']").addClass("no-price-pc", function() {
            $(".no-price-pc").attr("style", "-webkit-filter: grayscale(100%); filter: grayscale(100%);")
        }), $(".payment-channel-element").removeClass("on active"), void $(".best-deal-label").hide();
        CODA.Shop.selectedDenomId && "string" != typeof CODA.Shop.selectedDenomId || CODA.Shop.var.denomPlaceholder !== r || CODA.Shop.selectLowestDenom(e, !0), window.isSendSms = o, window.denomPricepoints = CODA.Shop.getPricePointsByDenom(CODA.Shop.selectedDenomId) || [];
        var i = denomPricepoints.find(function(t) {
            return t.pricePointPaymentChannel.id == e
        });
        if (i && (0 != i.price || 1 == CODA.Shop.var.variablePrice) && 1 === i.pricePointPaymentChannel.channelStatus) {
            if ($("#contents .section.payment ul li").removeClass("active"), $("#contents .section.payment ul li").find(".info").hide(), CODA.Shop.var.variablePrice) {
                if (CODA.Shop.var.userDenomPrice < CODA.Shop.property.ProductAction.variableDenomPriceMinAmount) return CODA.Shop.var.isAllowTxn = !1, !1;
                if (CODA.Shop.var.userDenomPrice > CODA.Shop.property.ProductAction.variableDenomPriceMaxAmount) return CODA.Shop.var.isAllowTxn = !1, !1
            }
            331 == e || 250 == e ? $(".BoxType .selectList02 li a").find(".info").addClass("infoForLong") : $("#paymentChannel_" + e).addClass("on"), $("#paymentChannel_" + e).addClass("active"), $("#paymentChannel_" + e).find(".info").show(), $("#price").val(i.price), CODA.Shop.selectedPricePointId = i.id, p(e, t, n, o, a), $("#paymentChannel").val(e)
        }
    };
    var D = selectPaymentChannel;
    window.selectDenom = function(e, t, n) {
        if (CODA.Shop.selectedDenomId = e, CODA.Shop.var.variablePrice = n, n || (CODA.Shop.var.isAllowTxn = !0), $("#contents .section.voucher ul li").removeClass("active"), $("#denomination_" + e).addClass("active"), $("#contents .section.payment ul li").removeClass("active"), $("#contents .section.payment ul li").find(".info").hide(), p(0), CODA.Shop.selectedPricePointId = null, $("#denominationId").val(e), $("#skuHashId").val(t), !CODA.Shop.var.variablePrice) {
            Object(o.a)(e);
            var a = $("div.payment-price-container div.price_label");
            1 === a.size() && (CODA.Shop.selectedPaymentChannelId = parseInt(a[0].id.split("_").pop())), CODA.Shop.selectedPaymentChannelId > 0 && D(CODA.Shop.selectedPaymentChannelId)
        }
    }, t.a = selectDenom
}, function(module, __webpack_exports__, __webpack_require__) {
    var initVar = function initVar() {
        window.tempText, window.channelName, window.displayCurrencyLen, window.isDcb = !1, window.isSendSms = !1, window.CODA.Shop = function(CODA, $) {
            var exports = {
                txnId: null,
                pricePointsByDenomUrl: null,
                voucherDenoms: null,
                selectedDenomId: null,
                selectedPaymentChannelId: null,
                selectedPricePointId: null,
                displayCurrencySymbol: null,
                sellerGroup: {},
                constant: {
                    SELLER_NAME: null,
                    CURRENCY_NAME: null,
                    LANGUAGE_CODE: null,
                    EMAIL_TEXT: ""
                },
                var: {
                    isAllowTxn: !0,
                    isValidDenom: !1,
                    variablePrice: !1,
                    userDenomPrice: 0,
                    skuId: null,
                    selectedChannelName: "",
                    theLanguage: ""
                },
                Column: {
                    sellerGroup: {
                        userEmailRequired: null,
                        voucherTypeName: null
                    }
                },
                property: {
                    ProductAction: {
                        variableDenomPriceMaxAmount: null,
                        displayVariablePriceText: null,
                        displayCurrencySymbol: null,
                        variableDenomPriceMinAmount: null
                    },
                    PaymentChannelInfo: {
                        XLID: null,
                        TELKOMSELID: null,
                        BOLTID: null,
                        HUTCH_THREEID: null,
                        SEVELINID: null,
                        indosatID: null,
                        smartLiID: null
                    },
                    VoucherType: {
                        HEROES_EVOLVED_KEY: null
                    }
                },
                Country: {
                    BR: !1
                },
                translation: {
                    variablePriceAmountLimit: "",
                    priceCap: "",
                    notAvailableForDenom: "",
                    invalidVoucher: "",
                    invalidPaymentMethod: "",
                    invalidEmail: "",
                    invalidMobileNumber: "",
                    validateHeader: "",
                    userIdFormatErrorHeader: "",
                    userIdFormatErrorContent: "",
                    userIdFormatErrorContent_withServer: "",
                    idFormatErrorHeader: "",
                    idFormatErrorContent: "",
                    idNumberFormatErrorHeader: "",
                    idNumberFormatErrorContent: "",
                    idFormatErrorContent_withServer: "",
                    accountIdFormatErrorContent_withServer: "",
                    playerIdFormatErrorHeader: "",
                    playerIdFormatErrorContent: "",
                    playerIdFormatErrorContent_withServer: "",
                    playerIdFormatErrorContent_withServerOS: "",
                    sidFormatErrorHeader: "",
                    sidFormatErrorContent: "",
                    accountIdFormatErrorHeader: "",
                    accountIdFormatErrorContent: "",
                    nicknameFormatErrorHeader: "",
                    nicknameFormatErrorContent: "",
                    rememberMe: "",
                    buyNow: "",
                    needYourEmail: "",
                    emailOptional: "",
                    readMore: "",
                    readLess: "",
                    outOfStockMsgHeader: "",
                    outOfStockMsgContent: "",
                    memberValidFailHeader: "",
                    memberValidFailContent: "",
                    seasonMemberValidFailContent: "",
                    moontonTwilightPassOneTimeContent: "",
                    moontonSeasonalPassPremiumOneTimeContent: "",
                    limitedPurchaseContent: "",
                    mlVersionForbiddenContent: "",
                    loveNikkiOneTimeHeader: "",
                    loveNikkiOneTimeContent: "",
                    foodFantasyOneTimeHeader: "",
                    foodFantasyOneTimeContent: "",
                    foodFantasyExpireHeader: "",
                    foodFantasyExpireContent: "",
                    playerIdNotFoundHeader: "",
                    playerIdNotFoundContent: "",
                    sidNotFoundHeader: "",
                    sidNotFoundContent: "",
                    itemInvalidHeader: "",
                    itemInvalidContent: "",
                    userNotEligibleHeader: "",
                    userNotEligibleContent: "",
                    processErrorHeader: "",
                    userIdNotFoundHeader: "",
                    userIdNotFoundContent: "",
                    internalError: "",
                    notAvailable: "",
                    fullNameRequired: "",
                    CPFMinimumLength: "",
                    CPFNumberRequired: "",
                    userIdConfirmContentVN_VR1: "",
                    userIdConfirmContentVN_VR2: "",
                    mobileNumberLableTelkomsel: "",
                    mobileNumberPlaceholder: "",
                    oops: "",
                    codeAlreadyUsedHeader: "",
                    codeAlreadyUsedContent: ""
                },
                url: {
                    initPaymentAction: "",
                    AWSHost: "",
                    addExInfo: ""
                },
                getLowestDenomByPaymentChannel: function(e, t) {
                    $.each(CODA.Shop.voucherDenoms, function(n, o) {
                        var a = !1;
                        if (1 == o._status && ($.each(o.voucherPricePoints, function(n, r) {
                                if (0 != r.price && r.pricePointPaymentChannel.id == e) return a = !0, t(o), !1
                            }), !0 === a)) return !1
                    })
                },
                getPricePointsByDenom: function(e) {
                    var t = {};
                    return $.each(CODA.Shop.voucherDenoms, function(n, o) {
                        o.id == e && (t = o.voucherPricePoints)
                    }), t
                },
                getVoucherPricePointById: function(e) {
                    var t = {};
                    return $.each(CODA.Shop.voucherDenoms, function(n, o) {
                        var a = o.voucherPricePoints.filter(function(t) {
                            return t.id == e
                        })[0];
                        a && a.id == e && (t = a)
                    }), t
                },
                selectLowestDenom: function selectLowestDenom(paymentChannelId, isMobile) {
                    CODA.Shop.getLowestDenomByPaymentChannel(paymentChannelId, function(lowestDenom) {
                        isMobile ? (eval($(".ul-denoms li#denomination_" + lowestDenom.id + " > a").attr("href")), eval($(".ul-paymentChannels li#paymentChannel_" + paymentChannelId + " > a").attr("onclick"))) : (eval($(".ul-denoms a#denomination_" + lowestDenom.id).attr("href")), eval($(".ul-paymentChannels li > a#" + paymentChannelId).attr("onclick")))
                    })
                },
                emailCookie: "codashop_email",
                phoneCookie: "codashop_phone"
            };
            return exports
        }(CODA, jQuery)
    };
    __webpack_exports__.a = initVar
}, function(e, t, n) {
    var o = n(5),
        a = n(1);
    t.a = function() {
        $(".ul-denoms li").on("click", function() {
            "disable-voucher" != $(this).find("a")[0].className && (CODA.Shop.selectedDenomId = $(this).attr("id").split("_")[1])
        }), $(".ul-paymentChannels a").on("click", function() {
            CODA.Shop.selectedDenomId || CODA.Shop.selectLowestDenom($(this).parent().attr("id").split("_")[1], !0)
        }), $("#variableDenomPrice").keypress(function() {
            if ($("#variableDenomPrice").html().length >= 10) return !1
        }), $(".BoxType input").on("focus", function() {
            $(this).removeClass("place")
        }).on("blur", function() {
            "" == $(this).val() && $(this).addClass("place")
        }), $(".typeCheck .checkImg").click(function() {
            $("#ck1").is(":checked") ? $(this).addClass("checkOn") : $(this).removeClass("checkOn")
        }), $(".howItWorks").click(function(e) {
            e.preventDefault()
        }), $(".variableDenomList").click(function() {
            CODA.Shop.var.customCurrentJPPlaceholder = $("#variableDenomPrice").html(), $("#variableDenomPrice").html(""), $(".price.pr").html("");
            var e = $("#variableDenomValues").val();
            CODA.Shop.selectedDenomId = e.split(",")[0], CODA.Shop.var.skuId = e.split(",")[1], $("#contents .section.voucher ul li").removeClass("active"), $("#denomination_" + CODA.Shop.selectedDenomId).addClass("active"), $("#errorMessageContainer").html(CODA.Shop.property.ProductAction.displayCurrencySymbol), $("#displayCurrencySymbolContainer").text($("#errorMessageContainer").html() + ""), $("#errorMessageContainer").html(""), $("#variableDenomPrice").focus()
        }), $("#variableDenomPrice").focusout(function() {
            CODA.Shop.var.userDenomPrice = $("#variableDenomPrice").html(), CODA.Shop.var.userDenomPrice || $("#variableDenomPrice").html(CODA.Shop.var.customCurrentJPPlaceholder), CODA.Shop.var.isValidDenom = !1, $("#errorMessageContainer").html("");
            var e = $("#variableDenomValues").val();
            CODA.Shop.selectedDenomId = e.split(",")[0], CODA.Shop.var.skuId = e.split(",")[1];
            var t = CODA.Shop.var.userDenomPrice;
            isNaN(t) && (t = t.replace(/[^0-9\.]/g, "")).split(".").length > 2 && (t = t.replace(/\.+$/, "")), CODA.Shop.var.userDenomPrice = t;
            var n = CODA.Shop.property.ProductAction.displayVariablePriceText;
            return "" == CODA.Shop.var.userDenomPrice || isNaN(Number(CODA.Shop.var.userDenomPrice)) ? ($("#errorMessageContainer").html(n), CODA.Shop.var.denomPlaceholder = $("#errorMessageContainer").html(), $("#variableDenomPrice").html($("#errorMessageContainer").html()), $("#denomination_" + CODA.Shop.selectedDenomId).removeClass("active"), $("#errorMessageContainer").html(""), $("#displayCurrencySymbolContainer").text(""), !1) : (CODA.Shop.var.userDenomPrice = Number(CODA.Shop.var.userDenomPrice), CODA.Shop.property.ProductAction.variableDenomPriceMaxAmount = Number(CODA.Shop.property.ProductAction.variableDenomPriceMaxAmount), CODA.Shop.property.ProductAction.variableDenomPriceMinAmount = Number(CODA.Shop.property.ProductAction.variableDenomPriceMinAmount), CODA.Shop.var.userDenomPrice < CODA.Shop.property.ProductAction.variableDenomPriceMinAmount ? ($("#variableDenomPrice").html(CODA.Shop.var.userDenomPrice), $("#errorMessageContainer").html("".concat(CODA.Shop.translation.variablePriceAmountLimit)), CODA.Shop.var.isAllowTxn = !1, !1) : CODA.Shop.var.userDenomPrice > CODA.Shop.property.ProductAction.variableDenomPriceMaxAmount ? ($("#variableDenomPrice").html(CODA.Shop.var.userDenomPrice), $("#errorMessageContainer").html(CODA.Shop.translation.variablePriceAmountLimit), CODA.Shop.var.isAllowTxn = !1, !1) : ($("#variablePriceSplitter").val(CODA.Shop.displayCurrencySymbol + "_" + CODA.Shop.var.userDenomPrice), CODA.Shop.displayCurrencySymbol, CODA.Shop.var.userDenomPrice, $("#variableDenomPrice").html(CODA.Shop.var.userDenomPrice), CODA.Shop.var.isAllowTxn = !0, CODA.Shop.var.isValidDenom = !0, Object(o.a)(CODA.Shop.selectedDenomId, CODA.Shop.var.skuId, !0), void Object(a.a)(CODA.Shop.selectedDenomId)))
        }), $(".popError").click(function() {
            $("#overlay").hide(), $(".popError").hide()
        }), $("div#formSection").on("click", "#ck1", function() {
            $("#ck1").is(":checked") ? ($.cookie("CODA.Shop.Cookie.email", $("#email").val(), {
                path: "/",
                expires: 180
            }), $("input[name='boletoFullName']").length > 0 && "" !== $("#boletoFullName").val().trim() && $.cookie("CODA.Shop.Cookie.boletoFullName", $("#boletoFullName").val(), {
                expires: 180
            }), $("input[name='boletoCPFNumber']").length > 0 && "" !== $("#id_no").val().trim() && $.cookie("CODA.Shop.Cookie.boletoCPFNumber", $("#id_no").val(), {
                expires: 180
            }), $("input[name='phoneNumber']").length > 0 && "" !== $("#phoneNumber").val().trim() && $.cookie("CODA.Shop.Cookie.phoneNumber", $("#phoneNumber").val(), {
                expires: 180
            })) : ($.cookie("CODA.Shop.Cookie.email", null), $.cookie("CODA.Shop.Cookie.boletoFullName", null), $.cookie("CODA.Shop.Cookie.boletoCPFNumber", null), $.cookie("CODA.Shop.Cookie.phoneNumber", null))
        }), $("div#formSection").on("blur", "#email", function() {
            var e = $("#email").val();
            isEmail(e) && $("#ck1").is(":checked") && $.cookie("CODA.Shop.Cookie.email", e, {
                path: "/",
                expires: 180
            })
        }), $("div#formSection").on("blur", "#boletoFullName", function() {
            if ($("#ck1").is(":checked")) {
                var e = $("#boletoFullName").val();
                $.cookie("CODA.Shop.Cookie.boletoFullName", e, {
                    expires: 180
                })
            }
        }), $("div#formSection").on("blur", "#boletoCPFNumber", function() {
            if ($("#ck1").is(":checked")) {
                var e = $("#id_no").val();
                $.cookie("CODA.Shop.Cookie.boletoCPFNumber", e, {
                    expires: 180
                })
            }
        }), $("div#formSection").on("blur", "#phoneNumber", function() {
            if ($("#ck1").is(":checked")) {
                var e = $("#phoneNumber").val();
                $.cookie("CODA.Shop.Cookie.phoneNumber", e, {
                    expires: 180
                })
            }
        })
    }
}, function(e, t, n) {
    t.a = function() {
        $(".ico-question.desktop-trigger").on("mouseover", function() {
            0 == $("#img-helper-element").children().length && $("#img-helper-element").html('<img src="https://cdn1.codashop.com/S/content/common/images/helpers/' + document.getElementById("group-id").value.split(" ").join("_").toLowerCase() + '.png" />'), $("#img-helper-element").fadeIn()
        }), $(".ico-question.desktop-trigger").on("mouseout", function() {
            $("#img-helper-element").fadeOut()
        }), $(".ico-question.mobile-trigger").on("click", function() {
            0 == $("#img-helper-element").children().length && $("#img-helper-element").html('<img src="https://cdn1.codashop.com/S/content/common/images/helpers/' + document.getElementById("group-id").value.split(" ").join("_").toLowerCase() + '.png" />'), $("#img-helper-element").fadeIn(function() {
                $(".img-helper__close-btn").css("top", $("#img-helper-element").height() + 35 + "px"), $(".img-helper__close-btn").fadeIn()
            }), $(".img-helper__background").fadeIn(function() {
                $("body").css("overflow", "hidden")
            })
        }), $(".img-helper__close-btn, .img-helper__background").on("click", function() {
            $("#img-helper-element").hide(), $(".img-helper__background").hide(), $(".img-helper__close-btn").hide(), $("body").css("overflow", "auto")
        })
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    var _common_getParameterByName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10),
        preSelectDenom = function preSelectDenom() {
            $("div.payment").LoadingOverlay("hide");
            var preSelectDenomParam = Object(_common_getParameterByName__WEBPACK_IMPORTED_MODULE_0__.a)("denom");
            preSelectDenomParam && eval($("ul.vocherSelectionList li#denomination_" + preSelectDenomParam + " a").attr("href"))
        };
    __webpack_exports__.a = preSelectDenom
}, function(e, t, n) {
    window.getParameterByName = function(e, t) {
        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }, t.a = getParameterByName
}, , function(e, t, n) {
    n.r(t);
    var o = n(6),
        a = n(7),
        r = n(9),
        i = n(5);
    window.checkKeyCode = function(e) {
        try {
            if (13 == e.keyCode) return e.preventDefault(), $("#variableDenomPrice").blur(), !1
        } catch (e) {}
    };
    var d = checkKeyCode;
    window.close3rdPartyConfirmDialog = function() {
        $(".confirm-content > ul > li").not("li:first, li:nth-child(2)").remove(), $(".confirm-content > ul > br").not("br:first").remove(), $(".confirm-dialog").hide()
    };
    var l = close3rdPartyConfirmDialog;
    window.enableElement = function(e) {
        $("." + e).removeAttr("disabled"), $("." + e).addClass("enable")
    };
    var s = enableElement,
        c = function() {
            window.CODA.ResultCodes = (CODA, jQuery, {
                codes: {
                    10001: [{
                        lang: "default",
                        name: "USER_TXN_INPROGRESS",
                        text: "We are still processing your previous transaction. Please wait 5 seconds and try again"
                    }, {
                        lang: "en",
                        name: "USER_TXN_INPROGRESS",
                        text: "We are still processing your previous transaction. Please wait 5 seconds and try again"
                    }, {
                        lang: "in",
                        name: "USER_TXN_INPROGRESS",
                        text: "Kami masih memproses transaksi anda sebelumnya. Mohon tunggu 5 detik dan coba kembali"
                    }, {
                        lang: "th",
                        name: "USER_TXN_INPROGRESS",
                        text: "à¹€à¸£à¸²à¸à¸³à¸¥à¸±à¸‡à¸”à¸³à¹€à¸™à¸´à¸™à¸£à¸²à¸¢à¸à¸²à¸£à¸‚à¸­à¸‡à¸„à¸¸à¸“à¸à¹ˆà¸­à¸™à¸«à¸™à¹‰à¸²à¸™à¸µà¹‰à¸­à¸¢à¸¹à¹ˆ à¸à¸£à¸¸à¸“à¸²à¸£à¸­ 5 à¸§à¸´à¸™à¸²à¸—à¸µ à¹à¸¥à¸°à¸¥à¸­à¸‡à¹ƒà¸«à¸¡à¹ˆà¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡"
                    }, {
                        lang: "my",
                        name: "USER_TXN_INPROGRESS",
                        text: "á€™á€„á€ºá€‚á€œá€¬á€•á€«á‹á€€á€»á€½á€”á€ºá€á€±á€¬á€ºá€á€­á€¯á€· á€žá€„á€ºáá€á€šá€ºá€šá€°á€™á€¾á€¯á€¡á€á€½á€€á€ºProcessá€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€•á€±á€¸á€”á€±á€•á€«á€á€šá€ºá‹á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯5Seconds á€…á€±á€¬á€„á€·á€ºá€†á€­á€¯á€„á€ºá€¸á€•á€¼á€®á€¸á€•á€¼á€”á€ºá€á€šá€ºá€šá€°á€•á€«á‹"
                    }, {
                        lang: "pt",
                        name: "USER_TXN_INPROGRESS",
                        text: "Ainda estamos processando sua transaÃ§Ã£o anterior. Por favor aguarde 5 segundos e tente novamente."
                    }],
                    10002: [{
                        lang: "default",
                        name: "PTS_INVALID_MSISDN_TELKOMSEL",
                        text: "Please check that the phone number you entered is a valid Telkomsel mobile number."
                    }, {
                        lang: "en",
                        name: "PTS_INVALID_MSISDN_TELKOMSEL",
                        text: "Please check that the phone number you entered is a valid Telkomsel mobile number."
                    }, {
                        lang: "in",
                        name: "PTS_INVALID_MSISDN_TELKOMSEL",
                        text: "Harap periksa bahwa nomor telepon yang Anda masukkan adalah nomor ponsel Telkomsel yang valid"
                    }],
                    10003: [{
                        lang: "default",
                        name: "INVALID_MSISDN_INDOSAT",
                        text: "Please check that the phone number you entered is a valid Indosat mobile number."
                    }, {
                        lang: "en",
                        name: "INVALID_MSISDN_INDOSAT",
                        text: "Please check that the phone number you entered is a valid Indosat mobile number."
                    }, {
                        lang: "in",
                        name: "INVALID_MSISDN_INDOSAT",
                        text: "Harap periksa bahwa nomor telepon yang Anda masukkan adalah nomor ponsel Indosat yang valid"
                    }],
                    10004: [{
                        lang: "default",
                        name: "INVALID_MSISDN_XL",
                        text: "Please check that the phone number you entered is a valid XL mobile number."
                    }, {
                        lang: "en",
                        name: "INVALID_MSISDN_XL",
                        text: "Please check that the phone number you entered is a valid XL mobile number."
                    }, {
                        lang: "in",
                        name: "INVALID_MSISDN_XL",
                        text: "Harap periksa bahwa nomor telepon yang Anda masukkan adalah nomor ponsel XL yang valid"
                    }],
                    10005: [{
                        lang: "default",
                        name: "INVALID_MSISDN_HUTCH_THREE",
                        text: "Please check that the phone number you entered is a valid TRI mobile number."
                    }, {
                        lang: "en",
                        name: "INVALID_MSISDN_HUTCH_THREE",
                        text: "Please check that the phone number you entered is a valid TRI mobile number."
                    }, {
                        lang: "in",
                        name: "INVALID_MSISDN_HUTCH_THREE",
                        text: "Harap periksa bahwa nomor telepon yang Anda masukkan adalah nomor ponsel TRI yang valid"
                    }]
                }
            })
        },
        u = n(3),
        m = n(0),
        C = n(8);
    window.openTxnWindow = function() {
        var e, t, n;
        if ("init" != (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pass") && CODA.Shop.txnId) {
            if (null != CODA.Shop.backendAPIredirect) {
                if (CODA.Shop.backendAPIredirect.errorCode) return CODA.Shop.backendAPIredirect.errorMsg ? ($("#errorMessage").html(CODA.Shop.backendAPIredirect.errorMsg), $("#errorHeader").html(""), void $(".popError").show()) : ($("#errorMessage").html(CODA.Shop.translation.internalError), $("#errorHeader").html(""), void $(".popError").show());
                window.location.href = CODA.Shop.backendAPIredirect.result + (CODA.Shop.backendAPIredirect.redirect_url ? "&redirect_url=" + CODA.Shop.backendAPIredirect.redirect_url : "")
            } else null != CODA.Shop.initPaymentData.beInitSess ? $.ajax((e = {
                type: "POST",
                url: CODA.Shop.url.initPaymentAction,
                data: CODA.Shop.initPaymentData,
                dataType: "json",
                timeout: 3e4,
                beforeSend: function() {
                    $("#submit-loader").show()
                },
                success: function(e) {
                    try {
                        var t = JSON.parse(e);
                        if (!t.result || !t.success) {
                            if (t && t.RESULT_CODE) {
                                var n = CODA.ResultCodes.codes[t.RESULT_CODE] ? CODA.ResultCodes.codes[t.RESULT_CODE].filter(function(e) {
                                    return e.lang == theLanguage
                                })[0] : "";
                                if (n || (n = CODA.ResultCodes.codes[t.RESULT_CODE] ? CODA.ResultCodes.codes[t.RESULT_CODE].filter(function(e) {
                                        return "default" == e.lang
                                    })[0] : ""), n) return $("#errorMessage").html(n.text), $("#errorHeader").html(""), void $(".popError").show()
                            } else {
                                if (t && t.errorMsg) {
                                    var o = {
                                            code: t.errorCode,
                                            msg: t.errorMsg
                                        },
                                        a = "".concat(o.msg, " (error:").concat(o.code, ").");
                                    return $("#errorMessage").html(a), $("#errorHeader").html(""), void $(".popError").show()
                                }
                                if (t && t.errorCode) return void("468" == t.errorCode && (close3rdPartyConfirmDialog(), $("#errorMessage").html(CODA.Shop.translation.CPF_NumberIncorrect), $("#errorHeader").html(CODA.Shop.translation.processErrorHeader), $(".popError").show(), $("#overlay").show()))
                            }
                            throw new Error("Internal Error")
                        }
                        t.redirect_url ? (window.location.href = t.result + "&redirect_url=" + t.redirect_url, window.open(t.redirect_url, "_blank")) : window.location.href = t.result
                    } catch (e) {
                        $("#errorMessage").html(CODA.Shop.translation.internalError), $("#errorHeader").html(""), $(".popError").show()
                    }
                },
                complete: function(e, t) {
                    $("#submit-loader").hide(), "timeout" === t && ($("#errorMessage").html("We are sorry, but we were unable to process your order at this time due to a technical issue. Please try again in a few minutes."), $("#errorHeader").html(""), $(".popError").show())
                },
                error: function(e, t, n) {
                    if ($("#submit-loader").hide(), !navigator.onLine) return alert("Unable to connect to Codashop. Please go online to make a purchase."), void location.reload()
                }
            }, n = "text", (t = "dataType") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e)) : ($("#submit-loader").hide(), $(".dim").show(), airtime_checkout(CODA.Shop.txnId));
            CODA.Shop.initPaymentData = null, CODA.Shop.txnId = null, CODA.Shop.backendAPIredirect = null
        }
    };
    var p = openTxnWindow;
    window.submitRequest = function() {
        if ("init" != (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pass")) {
            CODA.Shop.txnId = null, CODA.Shop.backendAPIredirect = null, CODA.Shop.initPaymentData = null, $("#price").val();
            var e = $("#email").val().trim(),
                t = ($("#skuHashId").val(), $("#phoneNumber").val()),
                n = "",
                o = $(".vocherSelectionList li"),
                a = !1,
                r = "",
                i = "",
                d = "",
                l = CODA.Shop.translation.userIdNotFoundHeader;
            if (o.each(function(e) {
                    $(this).hasClass("active") && CODA.Shop.selectedPricePointId && (a = !0)
                }), CODA.Shop.selectedDenomId || (n += "<li>".concat(CODA.Shop.translation.invalidVoucher, "</li>")), CODA.Shop.selectedPricePointId && 0 != CODA.Shop.selectedPricePointId && 0 != CODA.Shop.selectedPricePointId.length && a && CODA.Shop.var.isAllowTxn || (n += "<li>".concat(CODA.Shop.translation.invalidPaymentMethod, "</li>")), ("true" == CODA.Shop.Column.sellerGroup.userEmailRequired && 0 == isSendSms && !isEmail(e) || "" != e && !isEmail(e)) && (n += "<li>".concat(CODA.Shop.translation.invalidEmail, "</li>")), $("input[name='phoneNumber']").length > 0) {
                var s = $("#phoneNumber").val();
                $.trim(s) ? (s.length < 10 || s.length > 14) && (n += "<li>" + CODA.Shop.translation.invalidMobileNumberLength + "</li>") : n += "<li>" + CODA.Shop.translation.invalidMobileNumber + "</li>"
            }($("input[name='boletoFullName']").length > 0 || $("input[name='boletoCPFNumber']").length > 0) && ("" != $("#boletoFullName").val().trim() ? r = $("#boletoFullName").val().trim() : n += "<li>".concat(CODA.Shop.translation.fullNameRequired, "</li>"), "" != $("#id_no").val().trim() ? (i = $("#id_no").val().trim()).length < 11 && (n += "<li>".concat(CODA.Shop.translation.CPFMinimumLength, "</li>")) : n += "<li>".concat(CODA.Shop.translation.CPFNumberRequired, "</li>"));
            var c = function(e, t) {
                $(".popError > div > h2").html(t), $("#errorMessage").html(e), $(".popError").show(), $("#overlay").show()
            };
            if (n.length > 0) c(n, CODA.Shop.translation.validateHeader);
            else {
                fbq("track", "InitiateCheckout", {
                    content_ids: [pricePointId, CODA.Shop.var.selectedChannelName],
                    content_type: CODA.Shop.constant.SELLER_NAME,
                    value: $("#price_" + CODA.Shop.selectedPaymentChannelId).val(),
                    currency: CODA.Shop.constant.CURRENCY_NAME
                });
                var u = new Date,
                    m = u.toLocaleDateString() + "-" + u.getHours() + u.getMinutes(),
                    C = {
                        name: r,
                        id_no: i
                    },
                    D = window.btoa(JSON.stringify(C));
                if (CODA.Shop.initPaymentData = {
                        "voucherPricePoint.id": CODA.Shop.selectedPricePointId,
                        "voucherPricePoint.price": CODA.Shop.getVoucherPricePointById(CODA.Shop.selectedPricePointId).price || 0,
                        "voucherPricePoint.variablePrice": CODA.Shop.var.userDenomPrice,
                        email: e,
                        n: m,
                        userVariablePrice: CODA.Shop.var.userDenomPrice,
                        msisdn: t,
                        "order.data.profile": D
                    }, CODA.Shop.VoucherType === CODA.Shop.property.VoucherType.HEROES_EVOLVED_KEY) {
                    if (!CODA.R2Games.isR2GamesParamValid()) return c(CODA.Shop.translation.playerIdFormatErrorContent_withServerOS, CODA.Shop.translation.playerIdFormatErrorHeader), $("#submit-loader").hide(), !0;
                    CODA.Shop.initPaymentData["r2GamesOrderRequest.gameServerId"] = CODA.R2Games.serverId, CODA.Shop.initPaymentData["r2GamesOrderRequest.operatingSystem"] = CODA.R2Games.os, CODA.Shop.initPaymentData["r2GamesOrderRequest.userRoleId"] = CODA.R2Games.roleid
                }
                if ($("input[name='moonton.userId']").length > 0) {
                    if (!CODA.Moonton.userId || !CODA.Moonton.zoneId) return void c(CODA.Shop.translation.userIdFormatErrorContent_withServer, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.Moonton.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.Moonton.zoneId
                } else if ($("input[name='snail.userId']").length > 0) {
                    if (!CODA.Snail.userId || !CODA.Snail.zoneId) return void c(CODA.Shop.translation.userIdFormatErrorContent_withServer, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.Snail.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.Snail.zoneId
                } else if ($("input[name='aov.userId']").length > 0) {
                    if (l = CODA.Shop.translation.playerIdFormatErrorHeader, d = CODA.Shop.translation.playerIdNotFoundContent + CODA.AOV.playerId, !CODA.AOV.playerId) return void c(CODA.Shop.translation.playerIdFormatErrorContent, CODA.Shop.translation.playerIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.AOV.playerId
                } else if ($("input[name='freefire.userId']").length > 0) {
                    if (l = CODA.Shop.translation.playerIdNotFoundHeader, d = CODA.Shop.translation.playerIdNotFoundContent + CODA.FREEFIRE.playerId, !CODA.FREEFIRE.playerId) return void c(CODA.Shop.translation.playerIdFormatErrorContent, CODA.Shop.translation.playerIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.FREEFIRE.playerId
                } else if ($("input[name='speeddrifters.userId']").length > 0) {
                    if (l = CODA.Shop.translation.playerIdNotFoundHeader, d = CODA.Shop.translation.playerIdNotFoundContent + CODA.SPEEDDRIFTERS.playerId, !CODA.SPEEDDRIFTERS.playerId) return void c(CODA.Shop.translation.playerIdFormatErrorContent, CODA.Shop.translation.playerIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.SPEEDDRIFTERS.playerId
                } else if ($("input[name='callofduty.userId']").length > 0) {
                    if (l = CODA.Shop.translation.uidNotFoundHeader, d = CODA.Shop.translation.uidNotFoundContent + CODA.CALLOFDUTY.userId, !CODA.CALLOFDUTY.userId) return void c(CODA.Shop.translation.uidFormatErrorContent, CODA.Shop.translation.uidFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.CALLOFDUTY.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='herogames.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, !CODA.HeroGames.userId || !CODA.HeroGames.zoneId) return void c(CODA.Shop.translation.userIdFormatErrorContent_withServer, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.HeroGames.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.HeroGames.zoneId
                } else if ($("input[name='topfun.userId']").length > 0) {
                    if (!CODA.TopFun.userId) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.TopFun.userId
                } else if ($("input[name='im30.userId']").length > 0) {
                    if (!CODA.Im30.userId || !CODA.Im30.zoneId) return void c(CODA.Shop.translation.userIdFormatErrorContent_withServer, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.Im30.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.Im30.zoneId
                } else if ($("input[name='efun.userId']").length > 0) {
                    if (!CODA.EFun.userId || !CODA.EFun.zoneId) return void c(CODA.Shop.translation.userIdFormatErrorContent_withServer, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.EFun.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.EFun.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.EFun.roleId
                } else if ($("input[name='elecsoul.userId']").length > 0) {
                    if (!CODA.ElecSoul.userId) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.ElecSoul.userId, CODA.Shop.initPaymentData["user.zoneId"] = "1"
                } else if ($("input[name='linekong.userId']").length > 0) {
                    if (!CODA.LineKong.userId || !CODA.LineKong.zoneId) return void c(CODA.Shop.translation.userIdFormatErrorContent_withServer, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.LineKong.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.LineKong.zoneId
                } else if ($("input[name='elex.userId']").length > 0) {
                    if (!CODA.Elex.userId) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.Elex.userId, CODA.Shop.initPaymentData["user.zoneId"] = 1
                } else if ($("input[name='loveNikki.userId']").length > 0) {
                    if (!CODA.LoveNikki.userId) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.LoveNikki.userId
                } else if ($("input[name='cmge.userId']").length > 0) {
                    for (var h in CODA.CMGE.userId = $("input[name='cmge.userId']").val(), CODA.CMGE.zoneName = $("input[name='cmge.zoneId']").val(), l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.CMGE.userId + "(" + CODA.CMGE.zoneName + ")", CODA.CMGE.zoneId = null, CODA.CMGE.zoneList.ServerList) CODA.CMGE.zoneList.ServerList[h].serverName == CODA.CMGE.zoneName && (CODA.CMGE.zoneId = CODA.CMGE.zoneList.ServerList[h].serverId);
                    if (!CODA.CMGE.userId || !CODA.CMGE.zoneName) return void c(CODA.Shop.translation.idFormatErrorContent_withServer, CODA.Shop.translation.idFormatErrorHeader);
                    if (null == CODA.CMGE.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.CMGE.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.CMGE.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.CMGE.zoneName
                } else if ($("input[name='ragnarokm.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.RAGNAROKM.userId + "(" + CODA.RAGNAROKM.zoneName + ")", !CODA.RAGNAROKM.userId || !CODA.RAGNAROKM.zoneName) return void c(CODA.Shop.translation.idFormatErrorContent_withServer, CODA.Shop.translation.idFormatErrorHeader);
                    if (null == CODA.RAGNAROKM.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.RAGNAROKM.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.RAGNAROKM.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.RAGNAROKM.zoneName
                } else if ($("input[name='ragnarokm_latam.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.RAGNAROKMLATAM.userId, !CODA.RAGNAROKMLATAM.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.RAGNAROKMLATAM.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='bigo.id']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.BIGO.userId, !CODA.BIGO.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.BIGO.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='eternal-clash.id']").length > 0) {
                    if (l = CODA.Shop.translation.playerIdNotFoundHeader, d = CODA.Shop.translation.playerIdNotFoundContent + CODA.EternalClash.userId, !CODA.EternalClash.userId) return void c(CODA.Shop.translation.playerIdFormatErrorContent, CODA.Shop.translation.playerIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.EternalClash.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='eoc.userId']").length > 0) {
                    for (var h in CODA.EOC.userId = $("input[name='eoc.userId']").val(), CODA.EOC.zoneName = $("input[name='eoc.zoneId']").val(), l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.EOC.userId + "(" + CODA.EOC.zoneName + ")", CODA.EOC.zoneId = null, CODA.EOC.zoneList.ServerList) CODA.EOC.zoneList.ServerList[h].serverName == CODA.EOC.zoneName && (CODA.EOC.zoneId = CODA.EOC.zoneList.ServerList[h].serverId);
                    if (!CODA.EOC.userId || !CODA.EOC.zoneName) return void c(CODA.Shop.translation.idFormatErrorContent_withServer, CODA.Shop.translation.idFormatErrorHeader);
                    if (null == CODA.EOC.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.EOC.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.EOC.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.EOC.zoneName
                } else if ($("input[name='lod.userId']").length > 0) {
                    for (var h in CODA.LOD.userId = $("input[name='lod.userId']").val(), CODA.LOD.zoneName = $("input[name='lod.zoneId']").val(), l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.LOD.userId + "(" + CODA.LOD.zoneName + ")", CODA.LOD.zoneId = null, CODA.LOD.zoneList.ServerList) CODA.LOD.zoneList.ServerList[h].serverName == CODA.LOD.zoneName && (CODA.LOD.zoneId = CODA.LOD.zoneList.ServerList[h].serverId);
                    if (!CODA.LOD.userId || !CODA.LOD.zoneName) return void c(CODA.Shop.translation.idFormatErrorContent_withServer, CODA.Shop.translation.idFormatErrorHeader);
                    if (null == CODA.LOD.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.LOD.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.LOD.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.LOD.zoneName
                } else if ($("input[name='hago.userId']").length > 0) {
                    if (!CODA.HAGO.userId) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.HAGO.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='MU.UID']").length > 0) {
                    if (!CODA.MU.UID || !CODA.MU.ServerID) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.MU.ServerID = CODA.MU.ServerID.replace(/\D/g, ""), CODA.Shop.initPaymentData["user.userId"] = CODA.MU.UID, CODA.Shop.initPaymentData["user.zoneId"] = CODA.MU.ServerID
                } else if ($("input[name='line.userId']").length > 0) {
                    if (l = CODA.Shop.translation.accountIdNotFoundHeader, d = CODA.Shop.translation.accountIdNotFoundContent + CODA.LINE.userId, !CODA.LINE.userId) return void c(CODA.Shop.translation.accountIdFormatErrorContent + " 12345678.", CODA.Shop.translation.accountIDFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.LINE.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='starmaker.userId']").length > 0) {
                    if (l = CODA.Shop.translation.sidNotFoundHeader, d = CODA.Shop.translation.sidNotFoundContent + CODA.StarMaker.userId, !CODA.StarMaker.userId) return void c(CODA.Shop.translation.sidFormatErrorContent + " 12345678.", CODA.Shop.translation.sidFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.StarMaker.userId, CODA.Shop.initPaymentData["user.zoneId"] = 6
                } else if ($("input[name='gamely.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.GAMELY.userId, !CODA.GAMELY.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.GAMELY.userId, CODA.Shop.initPaymentData["user.zoneId"] = 11
                } else if ($("input[name='volcano.userId']").length > 0) {
                    if (d = CODA.Shop.translation.nicknameNotFoundContent + CODA.VOLCANO.userId, l = CODA.Shop.translation.nicknameNotFoundHeader, !CODA.VOLCANO.userId) return void c(CODA.Shop.translation.nicknameFormatErrorContent, CODA.Shop.translation.nicknameFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.VOLCANO.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='kunlun.userId']").length > 0) {
                    for (var h in CODA.KUNLUN.userId = $("input[name='kunlun.userId']").val(), CODA.KUNLUN.zoneName = $("input[name='kunlun.zoneId']").val(), l = CODA.Shop.translation.accountIdNotFoundHeader, d = CODA.Shop.translation.accountIdNotFoundContent + CODA.KUNLUN.userId + "(" + CODA.KUNLUN.zoneName + ")", CODA.KUNLUN.zoneId = null, CODA.KUNLUN.zoneList.ServerList) CODA.KUNLUN.zoneList.ServerList[h].serverName == CODA.KUNLUN.zoneName && (CODA.KUNLUN.zoneId = CODA.KUNLUN.zoneList.ServerList[h].serverId);
                    if (!CODA.KUNLUN.userId || !CODA.KUNLUN.zoneName) return void c(CODA.Shop.translation.accountIdFormatErrorContent + " 12345678(BLEACH xxx).", CODA.Shop.translation.accountIdFormatErrorHeader);
                    if (null == CODA.KUNLUN.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.KUNLUN.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.KUNLUN.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.KUNLUN.zoneName
                } else if ($("input[name='ros.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.ROS.userId, !CODA.ROS.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.ROS.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='col.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.COL.userId, !CODA.COL.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.COL.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='MECHANIST.ID']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.MECHANIST.ID, !CODA.MECHANIST.ID) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.MECHANIST.ID, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='tumile.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.TUMILE.userId, !CODA.TUMILE.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.TUMILE.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='lovu.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.LOVU.userId, !CODA.LOVU.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.LOVU.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='cbc.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.CBC.userId, !CODA.CBC.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.CBC.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='zlongame.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.ZLONGAME.ID, !CODA.ZLONGAME.ID) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.ZLONGAME.ID, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='ADVENTURE.ID']").length > 0) {
                    if (!CODA.ADVENTURE.ID || !CODA.ADVENTURE.ZONEID) return void c(CODA.Shop.translation.userIdFormatErrorContent_withServer, CODA.Shop.translation.userIDFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.ADVENTURE.ID, CODA.Shop.initPaymentData["user.zoneId"] = CODA.ADVENTURE.ZONEID
                } else if ($("input[name='cyberhunter.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.CYBERHUNTER.userId, !CODA.CYBERHUNTER.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.CYBERHUNTER.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='higgs.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.HIGGS.ID, !CODA.HIGGS.ID) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.HIGGS.ID, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='gog.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.GOG.userId, !CODA.GOG.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.GOG.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='lumiaSaga.userId']").length > 0) {
                    if (CODA.LUMIASAGA.userId = $("input[name='lumiaSaga.userId']").val(),
                        CODA.LUMIASAGA.zoneName = $("input[name='lumiaSaga.zoneId']").val(), l = CODA.Shop.translation.playerIdNotFoundHeader, d = CODA.Shop.translation.playerIdNotFoundContent + CODA.LUMIASAGA.userId + "(" + CODA.LUMIASAGA.zoneName + ")", CODA.LUMIASAGA.zoneId = null, CODA.LUMIASAGA.zoneList)
                        for (var h in CODA.LUMIASAGA.zoneList.ServerList) CODA.LUMIASAGA.zoneList.ServerList[h].serverName == CODA.LUMIASAGA.zoneName && (CODA.LUMIASAGA.zoneId = CODA.LUMIASAGA.zoneList.ServerList[h].serverId);
                    if (!CODA.LUMIASAGA.userId || !CODA.LUMIASAGA.zoneName) return void c(CODA.Shop.translation.playerIdFormatErrorContent_withServer, CODA.Shop.translation.playerIdFormatErrorHeader);
                    if (null == CODA.LUMIASAGA.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.LUMIASAGA.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.LUMIASAGA.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.LUMIASAGA.zoneName
                } else if ($("input[name='saintSeiya.userId']").length > 0) {
                    for (var h in CODA.SAINTSEIYA.userId = $("input[name='saintSeiya.userId']").val(), CODA.SAINTSEIYA.zoneName = $("input[name='saintSeiya.zoneId']").val(), l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.SAINTSEIYA.userId + "(" + CODA.SAINTSEIYA.zoneName + ")", CODA.SAINTSEIYA.zoneId = null, CODA.SAINTSEIYA.zoneList.ServerList) CODA.SAINTSEIYA.zoneList.ServerList[h].serverName == CODA.SAINTSEIYA.zoneName && (CODA.SAINTSEIYA.zoneId = CODA.SAINTSEIYA.zoneList.ServerList[h].serverId);
                    if (!CODA.SAINTSEIYA.userId || !CODA.SAINTSEIYA.zoneName) return void c(CODA.Shop.translation.idFormatErrorContent_withServer, CODA.Shop.translation.idFormatErrorHeader);
                    if (null == CODA.SAINTSEIYA.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.SAINTSEIYA.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.SAINTSEIYA.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.SAINTSEIYA.zoneName
                } else if ($("input[name='eop.userId']").length > 0) {
                    if (l = CODA.Shop.translation.playerIdNotFoundHeader, d = CODA.Shop.translation.playerIdNotFoundContent + CODA.EOP.userId + "(" + CODA.EOP.zoneName + ")", !CODA.EOP.userId || !CODA.EOP.zoneName || "null" == CODA.EOP.zoneId) return void c(CODA.Shop.translation.playerIdFormatErrorContent_withServer, CODA.Shop.translation.playerIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.EOP.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.EOP.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.EOP.zoneName
                } else if ($("input[name='hhas.userId']").length > 0) {
                    if (l = CODA.Shop.translation.playerIdNotFoundHeader, d = CODA.Shop.translation.playerIdNotFoundContent + CODA.HHAS.userId, !CODA.HHAS.userId) return void c(CODA.Shop.translation.playerIdFormatErrorContent, CODA.Shop.translation.playerIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.HHAS.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='dominoqq.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.DOMINOQQ.userId, !CODA.DOMINOQQ.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.DOMINOQQ.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='boyaaCapsaSusun.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.BOYAACAPSASUSUN.userId, !CODA.BOYAACAPSASUSUN.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.BOYAACAPSASUSUN.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='kingofkings.userId']").length > 0) {
                    if (l = CODA.Shop.translation.rolenumberNotFoundHeader, d = CODA.Shop.translation.rolenumberNotFoundContent + CODA.KINGOFKINGS.ID, !CODA.KINGOFKINGS.ID) return void c(CODA.Shop.translation.rolenumberFormatErrorContent + " 12345678.", CODA.Shop.translation.rolenumberFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.KINGOFKINGS.ID, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='smc.userId']").length > 0) {
                    l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.SMC.userId, CODA.SMC.zoneId = null;
                    var A = CODA.Shop.smcServerListJson;
                    if (null != A && "ServerList" in A && (CODA.SMC.zoneList = A), CODA.SMC.zoneList)
                        for (var h in CODA.SMC.zoneList.ServerList) parseInt(CODA.SMC.userId) >= CODA.SMC.zoneList.ServerList[h].idRange[0] && parseInt(CODA.SMC.userId) <= CODA.SMC.zoneList.ServerList[h].idRange[1] && (CODA.SMC.zoneId = CODA.SMC.zoneList.ServerList[h].serverId);
                    if (!CODA.SMC.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    if (null == CODA.SMC.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.SMC.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.SMC.zoneId
                } else if ($("input[name='miracleM.userId']").length > 0) {
                    if (!CODA.MIRACLEM.ID) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.MIRACLEM.ID, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='eclipseIsle.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.ECLIPSEISLE.userId + "(" + CODA.ECLIPSEISLE.zoneName + ")", !CODA.ECLIPSEISLE.userId || !CODA.ECLIPSEISLE.zoneName) return void c(CODA.Shop.translation.idFormatErrorContent_withServer, CODA.Shop.translation.idNumberFormatErrorHeader);
                    if (null == CODA.ECLIPSEISLE.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.ECLIPSEISLE.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.ECLIPSEISLE.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.ECLIPSEISLE.zoneName
                } else if ($("input[name='lifeafter.userId']").length > 0) {
                    if (l = CODA.Shop.translation.accountIdNotFoundHeader, d = CODA.Shop.translation.accountIdNotFoundContent + CODA.LIFEAFTER.userId + "(" + CODA.LIFEAFTER.zoneName + ")", !CODA.LIFEAFTER.userId || !CODA.LIFEAFTER.zoneName) return void c(CODA.Shop.translation.accountIdFormatErrorContent_withServer, CODA.Shop.translation.accountIdFormatErrorHeader);
                    if (null == CODA.LIFEAFTER.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.LIFEAFTER.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.LIFEAFTER.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.LIFEAFTER.zoneName
                } else if ($("input[name='championofthefields.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNumberNotFoundHeader, d = CODA.Shop.translation.idNumberNotFoundContent + CODA.CHAMPIONOFTHEFIELDS.userId + "(" + CODA.CHAMPIONOFTHEFIELDS.zoneName + ")", !CODA.CHAMPIONOFTHEFIELDS.userId || !CODA.CHAMPIONOFTHEFIELDS.zoneName) return void c(CODA.Shop.translation.idFormatErrorContent_withServer, CODA.Shop.translation.idNumberFormatErrorHeader);
                    if (null == CODA.CHAMPIONOFTHEFIELDS.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.CHAMPIONOFTHEFIELDS.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.CHAMPIONOFTHEFIELDS.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.CHAMPIONOFTHEFIELDS.zoneName
                } else if ($("input[name='shankoemee.userId']").length > 0) {
                    if (l = CODA.Shop.translation.userIdNotFoundHeader, d = CODA.Shop.translation.userIdNotFoundContent + CODA.SHANKOEMEE.ID, !CODA.SHANKOEMEE.ID) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.SHANKOEMEE.ID, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='boyaaPokerTexas.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.POKERTEXAS.userId, !CODA.POKERTEXAS.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.POKERTEXAS.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='onmyoji.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.ONMYOJI.userId, !CODA.ONMYOJI.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.ONMYOJI.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='disorder.userId']").length > 0) {
                    if (l = CODA.Shop.translation.accountIdNotFoundHeader, d = CODA.Shop.translation.accountIdNotFoundContent + CODA.DISORDER.userId + "(" + CODA.DISORDER.zoneName + ")", !CODA.DISORDER.userId || !CODA.DISORDER.zoneName) return void c(CODA.Shop.translation.accountIdFormatErrorContent_withServer, CODA.Shop.translation.accountIdFormatErrorHeader);
                    if (null == CODA.DISORDER.zoneId) return void c(d, l);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.DISORDER.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.DISORDER.zoneId, CODA.Shop.initPaymentData.exUserInfo = CODA.DISORDER.zoneName
                } else if ($("input[name='indoplay.userId']").length > 0) {
                    if (l = CODA.Shop.translation.nicknameNotFoundHeader, d = CODA.Shop.translation.nicknameNotFoundContent + CODA.INDOPLAY.userId, !CODA.INDOPLAY.userId) return void c(CODA.Shop.translation.nicknameFormatErrorContent, CODA.Shop.translation.nicknameFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.INDOPLAY.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='rideOutHeroes.userId']").length > 0) {
                    if (l = CODA.Shop.translation.playerIdNotFoundHeader, d = CODA.Shop.translation.playerIdNotFoundHeader + CODA.RIDEOUTHEROES.userId, !CODA.RIDEOUTHEROES.userId) return void c(CODA.Shop.translation.playerIdFormatErrorContent, CODA.Shop.translation.playerIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.RIDEOUTHEROES.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='yome.userId']").length > 0) {
                    if (l = CODA.Shop.translation.idNotFoundHeader, d = CODA.Shop.translation.idNotFoundContent + CODA.YOME.userId, !CODA.YOME.userId) return void c(CODA.Shop.translation.idFormatErrorContent, CODA.Shop.translation.idFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.YOME.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='warOfGenesis.userId']").length > 0) {
                    if (l = CODA.Shop.translation.memberNoOrAdmiralNoNotFoundHeader, d = CODA.Shop.translation.memberNoOrAdmiralNoNotFoundContent + CODA.WAROFGENESIS.userId + "(" + CODA.WAROFGENESIS.zoneId + ")", !CODA.WAROFGENESIS.userId || !CODA.WAROFGENESIS.zoneId) return void c(CODA.Shop.translation.memberNoOrAdmiralNoFormatErrorContent, CODA.Shop.translation.memberNoOrAdmiralNoFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.WAROFGENESIS.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.WAROFGENESIS.zoneId
                } else if ($("input[name='gunshipBattle.userId']").length > 0) {
                    if (l = CODA.Shop.translation.memberNoOrAdmiralNoNotFoundHeader, d = CODA.Shop.translation.memberNoOrAdmiralNoNotFoundContent + CODA.GUNSHIPBATTLE.userId + "(" + CODA.GUNSHIPBATTLE.zoneId + ")", !CODA.GUNSHIPBATTLE.userId || !CODA.GUNSHIPBATTLE.zoneId) return void c(CODA.Shop.translation.memberNoOrAdmiralNoFormatErrorContent, CODA.Shop.translation.memberNoOrAdmiralNoFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.GUNSHIPBATTLE.userId, CODA.Shop.initPaymentData["user.zoneId"] = CODA.GUNSHIPBATTLE.zoneId
                } else if ($("input[name='honkaiimpact.userId']").length > 0) {
                    if (l = CODA.Shop.translation.userIdNotFoundHeader, d = CODA.Shop.translation.userIdNotFoundContent + CODA.HONKAIIMPACT.ID, !CODA.HONKAIIMPACT.ID) return void c(CODA.Shop.translation.userIdFormatErrorContent, CODA.Shop.translation.userIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.HONKAIIMPACT.ID, CODA.Shop.initPaymentData["user.zoneId"] = ""
                } else if ($("input[name='lordsmobile.userId']").length > 0) {
                    if (l = CODA.Shop.translation.iggIdNotFoundHeader, d = CODA.Shop.translation.iggIdNotFoundContent + CODA.LORDSMOBILE.userId, !CODA.LORDSMOBILE.userId) return void c(CODA.Shop.translation.iggIdFormatErrorContent, CODA.Shop.translation.iggIdFormatErrorHeader);
                    CODA.Shop.initPaymentData["user.userId"] = CODA.LORDSMOBILE.userId, CODA.Shop.initPaymentData["user.zoneId"] = ""
                }
                CODA.Shop.initPaymentData.voucherTypeName = CODA.Shop.Column.sellerGroup.voucherTypeName, $.ajax({
                    type: "POST",
                    url: CODA.Shop.url.initPaymentAction,
                    data: CODA.Shop.initPaymentData,
                    timeout: 3e4,
                    beforeSend: function() {
                        $("#submit-loader").show()
                    },
                    success: function(e) {
                        try {
                            var t = JSON.parse(e);
                            if (!t || !t.txnId) {
                                if (t && t.RESULT_CODE) {
                                    var n = CODA.ResultCodes.codes[t.RESULT_CODE] ? CODA.ResultCodes.codes[t.RESULT_CODE].filter(function(e) {
                                        return e.lang == CODA.Shop.var.theLanguage
                                    })[0] : "";
                                    if (n || (n = CODA.ResultCodes.codes[t.RESULT_CODE] ? CODA.ResultCodes.codes[t.RESULT_CODE].filter(function(e) {
                                            return "default" == e.lang
                                        })[0] : ""), n) return void c(n.text, CODA.Shop.translation.oops)
                                }
                                if (t.errorMsg) return void c(t.errorMsg, CODA.Shop.translation.oops);
                                throw new Error("Internal Error")
                            }
                            CODA.Shop.txnId = t.txnId, t.initCallBackendAPI && (CODA.Shop.backendAPIredirect = t), CODA.Shop.initPaymentData.beInitSess = t.beInitSess;
                            var o = t.isThirdPartyMerchant,
                                a = t.isR2GamesMerchant,
                                r = t.result,
                                i = t.success;
                            if ("-1" == t.txnId) c(CODA.Shop.translation.outOfStockMsgContent, CODA.Shop.translation.outOfStockMsgHeader), $("#submit-loader").hide();
                            else if ("-2" == t.txnId) c(CODA.Shop.translation.playerIdNotFoundContent + CODA.R2Games.roleid + " on " + CODA.R2Games.serverName, CODA.Shop.translation.playerIdNotFoundHeader), $("#submit-loader").hide();
                            else if (a) showR2Confirmation(t);
                            else if (o)
                                if (r) {
                                    var s = genVNVoucherReminderMsg(CODA.Shop.translation.userIdConfirmContentVN_VR1, CODA.Shop.translation.userIdConfirmContentVN_VR2, t);
                                    if (t.confirmation) showConfirmation(t, s);
                                    else {
                                        if (!i) throw new Error("Internal Error");
                                        p()
                                    }
                                } else {
                                    var u = "string" == typeof t.errorCode ? t.errorCode : t.errorCode.toString(),
                                        m = CODA.Shop.translation.processErrorHeader;
                                    switch (u) {
                                        case "1503":
                                        case "1515":
                                            c(CODA.Shop.translation.memberValidFailContent, CODA.Shop.translation.memberValidFailHeader);
                                            break;
                                        case "1512":
                                            c(CODA.Shop.translation.seasonMemberValidFailContent, CODA.Shop.translation.memberValidFailHeader);
                                            break;
                                        case "5034":
                                            c(CODA.Shop.translation.moontonTwilightPassOneTimeContent, CODA.Shop.translation.memberValidFailHeader);
                                            break;
                                        case "5152":
                                            c(CODA.Shop.translation.moontonSeasonalPassPremiumOneTimeContent, CODA.Shop.translation.memberValidFailHeader);
                                            break;
                                        case "1511":
                                            c(CODA.Shop.translation.limitedPurchaseContent, CODA.Shop.translation.memberValidFailHeader);
                                            break;
                                        case "1516":
                                            c(CODA.Shop.translation.mlVersionForbiddenContent, CODA.Shop.translation.memberValidFailHeader);
                                            break;
                                        case "-99":
                                            c(CODA.Shop.translation.loveNikkiOneTimeContent, CODA.Shop.translation.loveNikkiOneTimeHeader);
                                            break;
                                        case "-5":
                                            c(CODA.Shop.translation.foodFantasyOneTimeContent, CODA.Shop.translation.foodFantasyOneTimeHeader);
                                            break;
                                        case "-6":
                                            c(CODA.Shop.translation.foodFantasyExpireContent, CODA.Shop.translation.foodFantasyExpireHeader);
                                            break;
                                        case "-101":
                                            c(CODA.Shop.translation.itemInvalidContent, CODA.Shop.translation.itemInvalidHeader);
                                            break;
                                        case "-102":
                                        case "10":
                                            c(CODA.Shop.translation.userNotEligibleContent, CODA.Shop.translation.userNotEligibleHeader);
                                            break;
                                        case "-103":
                                            c(CODA.Shop.translation.processErrorContent, CODA.Shop.translation.processErrorHeader);
                                            break;
                                        case "-104":
                                            c(CODA.Shop.translation.requirementNotMetContent, CODA.Shop.translation.requirementNotMetHeader);
                                            break;
                                        case "-105":
                                            c(CODA.Shop.translation.loginRequiredContent, CODA.Shop.translation.loginRequiredHeader);
                                            break;
                                        case "468":
                                            c(CODA.Shop.translation.CPF_NumberIncorrect, CODA.Shop.translation.processErrorHeader);
                                            break;
                                        case "-999994":
                                            c(CODA.Shop.translation.unableToCheckUserAcc, m);
                                            break;
                                        case "98":
                                        case "200":
                                            c(CODA.Shop.translation.serverTempNotAvailable, m);
                                            break;
                                        case "-100":
                                        case "100":
                                        case "12":
                                        case "-32001":
                                        case "-405":
                                        case "-2":
                                        case "-32700":
                                        case "-3":
                                        case "-2601":
                                        case "108":
                                        case "1003":
                                        case "-1":
                                        case "22":
                                            "" == d && (d = null == t.user.zoneId || "" == t.user.zoneId || "1" == t.user.zoneId ? CODA.Shop.translation.userIdNotFoundContent + t.user.userId : CODA.Shop.translation.userIdNotFoundContent + t.user.userId + "(" + t.user.zoneId + ")"), c(d, l);
                                            break;
                                        default:
                                            c(CODA.Shop.translation.purchaseProcessUnavailable, m)
                                    }
                                } else {
                                if (!i) throw new Error("Internal Error");
                                p()
                            }
                        } catch (e) {
                            c(CODA.Shop.translation.internalError, CODA.Shop.translation.oops)
                        }
                    },
                    complete: function(e, t) {
                        $("#submit-loader").hide(), "timeout" === t && c(CODA.Shop.translation.internalError, CODA.Shop.translation.oops)
                    },
                    error: function(e, t, n) {
                        if ($("#submit-loader").hide(), !navigator.onLine) return alert("Unable to connect to Codashop. Please go online to make a purchase."), void location.reload()
                    },
                    dataType: "text"
                })
            }
        }
    };
    var D = submitRequest;
    window.addExInfo = function(e) {
        var t, n, o, a = !1;
        if ("init" != e) return null != CODA.Shop.initPaymentData.beInitSess ? (CODA.Shop.initPaymentData.exUserInfo = e, a = !0) : (CODA.Shop.initPaymentData.exUserInfo = e, CODA.Shop.initPaymentData.txnId = CODA.Shop.txnId, CODA.Shop.initPaymentData.beInitSess = CODA.Shop.initPaymentData.beInitSess, $.ajax((t = {
            type: "GET",
            async: !1,
            url: urlAddExInfo,
            data: CODA.Shop.initPaymentData,
            dataType: "json",
            timeout: 3e4,
            success: function(e) {
                a = !0
            },
            error: function(e, t) {}
        }, o = "text", (n = "dataType") in t ? Object.defineProperty(t, n, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = o, t))), a
    };
    var h = addExInfo,
        A = n(4),
        O = n(2);
    $(document).ready(function() {
        Object(u.a)(), setTimeout(function() {
            Object(r.a)()
        }, 200), h("init"), D("init"), p("init"), c(), Object(o.a)(), Object(a.a)(), d(), l(), s(), Object(m.a)(), Object(C.a)(), Object(A.a)("init"), Object(O.a)("init"), CODA.Shop.txnId = null, CODA.Shop.backendAPIredirect = null, CODA.Shop.selectedDenomId = null, CODA.Shop.selectedPaymentChannelId = null, CODA.Shop.selectedPricePointId = null, CODA.Shop.pricePointOptions = null, 1 !== $("ul.vocherSelectionList li[id^='denomination_']").size() || $("ul.vocherSelectionList li[id^='denomination_']").first().hasClass("gray") || (CODA.Shop.selectedDenomId = parseInt($("ul.vocherSelectionList li[id^='denomination_']")[0].id.split("_").pop()), setTimeout(function() {
            Object(i.a)(CODA.Shop.selectedDenomId)
        }, 100));
        var e = $("div.payment-price-container div.price_label");
        1 === e.size() && (CODA.Shop.selectedPaymentChannelId = parseInt(e[0].id.split("_").pop()));
        var t = $.cookie("cookie_playerid");
        if (null != t && $(".playerid").val(t), "${seller.productUrl}".indexOf(CODA.config.urls.battlenet) > -1) {
            showBattleNetTheme();
            var n = $("[id=paymentChannel_".concat(smartLiID));
            $(".section.payment > li").remove(), $(".section.payment > ul").html(n), $(".foo_03").remove()
        } else "${seller.productUrl}".indexOf(CODA.config.urls.cliponyu) > -1 && ($("#paymentChannel_".concat(SEVELINID)).remove(), $("#paymentChannel_".concat(indosatID)).remove(), $("#paymentChannel_".concat(XLID)).remove(), $("#paymentChannel_".concat(TELKOMSELID)).remove(), $("#paymentChannel_".concat(BOLTID)).remove(), $("#paymentChannel_".concat(HUTCH_THREEID)).remove(), showClipOnYuTheme(), $(".pgold").hide(), $(".foo_03").remove());
        $(".language-switcher-btn").click(function() {
            $(".lanPop").slideToggle(), $(".fade-background").toggle(), $("body").css("overflow", "hidden")
        }), $(".fade-background").click(function() {
            $(".fade-background").hide(), $(".lanPop").hide(), $("body").css("overflow", "scroll")
        }), $("a.disable-voucher").length != $(".voucher-list-element").length || $(".payment-logo-container > .logo").attr("style", "-webkit-filter: grayscale(100%); filter: grayscale(100%);")
    })
}]);