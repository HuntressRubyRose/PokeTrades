//Hotfix for now.
//document.querySelector('#PanelArea').style.display = "block";
customMessage = document.querySelector(".PA-Message");
let lfBunches = 0;
let ftBunches = 0;
var previewBall;
var previewGender;
var previewShiny;
var previewMint;
var previewMisc;
var previewMark;
var previewIVs;
var dexNumber;
var advancedPreview;
var panelsPositions;
var hoverInfo;
var exactIVs;
var oldSprites;
var emptyBunches;
var showEmpty;

if (localStorage.getItem('previewBall') == null) {
    previewBall = true;
    document.querySelector(".PA-BallButton").innerHTML = "On";
}
else if (localStorage.getItem('previewBall') == "1") {
    previewBall = true;
    document.querySelector(".PA-BallButton").innerHTML = "On";
} else {
    previewBall = false;
    document.querySelector(".PA-BallButton").innerHTML = "Off";
}

if (localStorage.getItem('previewGender') == null) {
    previewGender = false;
    document.querySelector(".PA-GenderButton").innerHTML = "Off";
}
else if (localStorage.getItem('previewGender') == "1") {
    previewGender = true;
    document.querySelector(".PA-GenderButton").innerHTML = "On";
} else {
    previewGender = false;
    document.querySelector(".PA-GenderButton").innerHTML = "Off";
}

if (localStorage.getItem('previewShiny') == null) {
    previewShiny = false;
    document.querySelector(".PA-ShinyButton").innerHTML = "Off";
}
else if (localStorage.getItem('previewShiny') == "1") {
    previewShiny = true;
    document.querySelector(".PA-ShinyButton").innerHTML = "On";
} else {
    previewShiny = false;
    document.querySelector(".PA-ShinyButton").innerHTML = "Off";
}

if (localStorage.getItem('previewMint') == null) {
    previewMint = false;
    document.querySelector(".PA-MintButton").innerHTML = "Off";
}
else if (localStorage.getItem('previewMint') == "1") {
    previewMint = true;
    document.querySelector(".PA-MintButton").innerHTML = "On";
} else {
    previewMint = false;
    document.querySelector(".PA-MintButton").innerHTML = "Off";
}

if (localStorage.getItem('previewMisc') == null) {
    previewMisc = false;
    document.querySelector(".PA-MiscButton").innerHTML = "Off";
}
else if (localStorage.getItem('previewMisc') == "1") {
    previewMisc = true;
    document.querySelector(".PA-MiscButton").innerHTML = "On";
} else {
    previewMisc = false;
    document.querySelector(".PA-MiscButton").innerHTML = "Off";
}

if (localStorage.getItem('previewMark') == null) {
    previewMark = false;
    document.querySelector(".PA-MarkButton").innerHTML = "Off";
}
else if (localStorage.getItem('previewMark') == "1") {
    previewMark = true;
    document.querySelector(".PA-MarkButton").innerHTML = "On";
} else {
    previewMark = false;
    document.querySelector(".PA-MarkButton").innerHTML = "Off";
}

if (localStorage.getItem('previewIVs') == null) {
    previewIVs = true;
    document.querySelector(".PA-IVsButton").innerHTML = "On";
}
else if (localStorage.getItem('previewIVs') == "1") {
    previewIVs = true;
    document.querySelector(".PA-IVsButton").innerHTML = "On";
} else {
    previewIVs = false;
    document.querySelector(".PA-IVsButton").innerHTML = "Off";
}

if (localStorage.getItem('panelPositions') == "left") {
    panelsPositions = "left";
    document.querySelector(".PA-PanelPositionButton").innerHTML = "Left";
    PanelsLeft();
} else {
    panelsPositions = "right";
    document.querySelector(".PA-PanelPositionButton").innerHTML = "Right";
    PanelsRight();
}

if (window.innerWidth < 768) {
    hoverInfo = false;
    document.querySelector(".PA-HoverButton").innerHTML = "N/A";
} else if (localStorage.getItem('hoverInfo') == null) {
    hoverInfo = true;
    document.querySelector(".PA-HoverButton").innerHTML = "On";
}
else if (localStorage.getItem('hoverInfo') == "1") {
    hoverInfo = true;
    document.querySelector(".PA-HoverButton").innerHTML = "On";
} else {
    hoverInfo = false;
    document.querySelector(".PA-HoverButton").innerHTML = "Off";
}

if (localStorage.getItem('dexNumber') == null) {
    dexNumber = false;
    document.querySelector(".PA-DexNumberButton").innerHTML = "Off";
}
else if (localStorage.getItem('dexNumber') == "1") {
    dexNumber = true;
    document.querySelector(".PA-DexNumberButton").innerHTML = "On";
} else {
    dexNumber = false;
    document.querySelector(".PA-DexNumberButton").innerHTML = "Off";
}

if (localStorage.getItem('advancedPreview') == null) {
    advancedPreview = true;
    document.querySelector(".PA-AdvancedPreviewButton").innerHTML = "On";
}
else if (localStorage.getItem('advancedPreview') == "1") {
    advancedPreview = true;
    document.querySelector(".PA-AdvancedPreviewButton").innerHTML = "On";
} else {
    advancedPreview = false;
    document.querySelector(".PA-AdvancedPreviewButton").innerHTML = "Off";
}

if (localStorage.getItem('oldSprites') == null) {
    oldSprites = false;
    document.querySelector(".PA-OldSpritesButton").innerHTML = "Off";
}
else if (localStorage.getItem('oldSprites') == "1") {
    oldSprites = true;
    document.querySelector(".PA-OldSpritesButton").innerHTML = "On";
} else {
    oldSprites = false;
    document.querySelector(".PA-OldSpritesButton").innerHTML = "Off";
}

if (localStorage.getItem('exactIVs') == null) {
    exactIVs = false;
    document.querySelector(".PA-ExactIVsButton").innerHTML = "Off";
}
else if (localStorage.getItem('exactIVs') == "1") {
    exactIVs = true;
    document.querySelector(".PA-ExactIVsButton").innerHTML = "On";
} else {
    exactIVs = false;
    document.querySelector(".PA-ExactIVsButton").innerHTML = "Off";
}

if (localStorage.getItem('emptyBunches') == null) {
    emptyBunches = true;
    showEmpty = "yes";
    document.querySelector(".PA-EmptyBunchesButton").innerHTML = "On";
}
else if (localStorage.getItem('emptyBunches') == "1") {
    emptyBunches = true;
    showEmpty = "yes";
    document.querySelector(".PA-EmptyBunchesButton").innerHTML = "On";
} else {
    emptyBunches = false;
    showEmpty = "";
    document.querySelector(".PA-EmptyBunchesButton").innerHTML = "Off";
}


$(".PA-Searchbar").keyup(function () {
    document.querySelector(".PA-Message").disabled = true;
    $("#ForTradeContainer").remove();
    $("#LookingForContainer").remove();
    //$(".PA-FTAvailableBunchesText").remove();
    //$(".PA-LFAvailableBunchesText").remove();
    searchInfoText = (document.querySelector(".PA-Searchbar").value);
    searchData = null;
    $.post(url + "/PHP/search_id.php", { searchID: searchInfoText }, TradeShopInfo);
    $.post(url + "/PHP/modify_check.php", { token: token, searchID: searchInfoText }, ModifyCheck);
    $.post(url + "/PHP/generate_all_bunches.php", { token: token, tradeOption: "For Trade" }, UserBunches);
    $.post(url + "/PHP/generate_selection.php", { token: token, searchID: searchInfoText, tradeOption: "Looking For" }, MatchMaking);

    localStorage.setItem('searchID', searchInfoText);
    if (document.querySelector(".PA-Searchbar").value != "") {
        window.location.hash = "users/" + searchInfoText;
    } else {
        RemoveHash();
    }
});

$('.PA-BunchHelp').click(function () {
    document.querySelector("#NotificationArea").style.display = "block";
    document.querySelector(".BunchesMoveHelp").style.display = "block";
});

$('.PA-ForTradeBunchEdit').click(function () {
    $.post(url + "/PHP/generate_all_bunches.php", { token: token, tradeOption: "For Trade" }, UserBunches);
    document.querySelector("#BunchArea").style.display = "block";
    document.querySelector("#PanelArea").style.display = "none";
});

$('.PA-ForTradeBunchMove').click(function () {
    if (currentlyRearranging == false) {
        currentlyRearranging = true;
        document.querySelector(".PA-ForTradeBunchMove").innerHTML = "Cancel";
        document.querySelector("#GeneratedSelection").style.pointerEvents = "none";
        BunchMoveStarted();
        document.querySelector(".PA-LookingForBunchEdit").style.pointerEvents = "none";
        document.querySelector(".PA-LookingForBunchEdit").style.backgroundColor = "grey";
        document.querySelector(".PA-LookingForBunchMove").style.pointerEvents = "none";
        document.querySelector(".PA-LookingForBunchMove").style.backgroundColor = "grey";
        document.querySelector("#PA-LookingForBunches").style.pointerEvents = "none";
    } else {
        currentlyRearranging = false;
        movingPokemon = null;
        oldPosition = "";
        newPosition = "";
        document.querySelector(".PA-ForTradeBunchMove").innerHTML = "Move For Trade Bunches";
        document.querySelector("#GeneratedSelection").style.pointerEvents = "initial";
        RemoveBunchOutline();
        BunchMoveFinished();
        document.querySelector(".PA-LookingForBunchEdit").style.pointerEvents = "initial";
        document.querySelector(".PA-LookingForBunchEdit").style.backgroundColor = "#efefef";
        document.querySelector(".PA-LookingForBunchMove").style.pointerEvents = "initial";
        document.querySelector(".PA-LookingForBunchMove").style.backgroundColor = "#efefef";
        document.querySelector("#PA-LookingForBunches").style.pointerEvents = "initial";
    }
});

$('.PA-LookingForBunchEdit').click(function () {
    $.post(url + "/PHP/generate_all_bunches.php", { token: token, tradeOption: "Looking For" }, UserBunches);
    document.querySelector("#BunchArea").style.display = "block";
    document.querySelector("#PanelArea").style.display = "none";
});

$('.PA-LookingForBunchMove').click(function () {
    if (currentlyRearranging == false) {
        currentlyRearranging = true;
        document.querySelector(".PA-LookingForBunchMove").innerHTML = "Cancel";
        document.querySelector("#GeneratedSelection").style.pointerEvents = "none";
        BunchMoveStarted();
        document.querySelector(".PA-ForTradeBunchEdit").style.pointerEvents = "none";
        document.querySelector(".PA-ForTradeBunchEdit").style.backgroundColor = "grey";
        document.querySelector(".PA-ForTradeBunchMove").style.pointerEvents = "none";
        document.querySelector(".PA-ForTradeBunchMove").style.backgroundColor = "grey";
        document.querySelector("#PA-ForTradeBunches").style.pointerEvents = "none";
    } else {
        currentlyRearranging = false;
        movingPokemon = null;
        oldPosition = "";
        newPosition = "";
        document.querySelector(".PA-LookingForBunchMove").innerHTML = "Move Looking For Bunches";
        document.querySelector("#GeneratedSelection").style.pointerEvents = "initial";
        RemoveBunchOutline();
        BunchMoveFinished();
        document.querySelector(".PA-ForTradeBunchEdit").style.pointerEvents = "initial";
        document.querySelector(".PA-ForTradeBunchEdit").style.backgroundColor = "#efefef";
        document.querySelector(".PA-ForTradeBunchMove").style.pointerEvents = "initial";
        document.querySelector(".PA-ForTradeBunchMove").style.backgroundColor = "#efefef";
        document.querySelector("#PA-ForTradeBunches").style.pointerEvents = "initial";
    }
});

$('.PA-CloseSettings').click(function () {
    CloseAllStartingAreas();
    document.querySelector(".PA-WhatsNewPanel").style.display = "block";

});

$('.PA-PanelPositionButton').click(function () {
    if (panelsPositions == "right") {
        panelsPositions = "left";
        localStorage.setItem('panelPositions', "left");
        document.querySelector(".PA-PanelPositionButton").innerHTML = "Left";
        PanelsLeft();
    } else {
        panelsPositions = "right";
        localStorage.setItem('panelPositions', "right");
        document.querySelector(".PA-PanelPositionButton").innerHTML = "Right";
        PanelsRight();
    }

});

$('.PA-BallButton').click(function () {
    if (previewBall == false) {
        previewBall = true;
        localStorage.setItem('previewBall', "1");
        document.querySelector(".PA-BallButton").innerHTML = "On";
    } else {
        previewBall = false;
        localStorage.setItem('previewBall', "0");
        document.querySelector(".PA-BallButton").innerHTML = "Off";
    }
});

$('.PA-GenderButton').click(function () {
    if (previewGender == false) {
        previewGender = true;
        localStorage.setItem('previewGender', "1");
        document.querySelector(".PA-GenderButton").innerHTML = "On";
    } else {
        previewGender = false;
        localStorage.setItem('previewGender', "0");
        document.querySelector(".PA-GenderButton").innerHTML = "Off";
    }
});

$('.PA-ShinyButton').click(function () {
    if (previewShiny == false) {
        previewShiny = true;
        localStorage.setItem('previewShiny', "1");
        document.querySelector(".PA-ShinyButton").innerHTML = "On";
    } else {
        previewShiny = false;
        localStorage.setItem('previewShiny', "0");
        document.querySelector(".PA-ShinyButton").innerHTML = "Off";
    }
});

$('.PA-MintButton').click(function () {
    if (previewMint == false) {
        previewMint = true;
        localStorage.setItem('previewMint', "1");
        document.querySelector(".PA-MintButton").innerHTML = "On";
    } else {
        previewMint = false;
        localStorage.setItem('previewMint', "0");
        document.querySelector(".PA-MintButton").innerHTML = "Off";
    }
});

$('.PA-MiscButton').click(function () {
    if (previewMisc == false) {
        previewMisc = true;
        localStorage.setItem('previewMisc', "1");
        document.querySelector(".PA-MiscButton").innerHTML = "On";
    } else {
        previewMisc = false;
        localStorage.setItem('previewMisc', "0");
        document.querySelector(".PA-MiscButton").innerHTML = "Off";
    }
});

$('.PA-MarkButton').click(function () {
    if (previewMark == false) {
        previewMark = true;
        localStorage.setItem('previewMark', "1");
        document.querySelector(".PA-MarkButton").innerHTML = "On";
    } else {
        previewMark = false;
        localStorage.setItem('previewMark', "0");
        document.querySelector(".PA-MarkButton").innerHTML = "Off";
    }
});

$('.PA-IVsButton').click(function () {
    if (previewIVs == false) {
        previewIVs = true;
        localStorage.setItem('previewIVs', "1");
        document.querySelector(".PA-IVsButton").innerHTML = "On";
    } else {
        previewIVs = false;
        localStorage.setItem('previewIVs', "0");
        document.querySelector(".PA-IVsButton").innerHTML = "Off";
    }

});

function PanelsRight() {
    document.querySelector(".MainSection").style.marginRight = "420px";
    document.querySelector("#SA-TopRow").style.marginRight = "420px";
    document.querySelector("#SelectionSection").style.marginRight = "420px";
    document.querySelector("#PanelArea").style.right = "0";
    document.querySelector("#LoginArea").style.right = "0";
    document.querySelector("#ViewingArea").style.right = "0";
    document.querySelector("#CreationArea").style.right = "0";
    document.querySelector("#FilterArea").style.right = "0";
    document.querySelector("#BunchArea").style.right = "0";

    document.querySelector(".MainSection").style.marginLeft = "unset";
    document.querySelector("#SA-TopRow").style.marginLeft = "unset";
    document.querySelector("#SelectionSection").style.marginLeft = "unset";
    document.querySelector("#PanelArea").style.left = "unset";
    document.querySelector("#LoginArea").style.left = "unset";
    document.querySelector("#ViewingArea").style.left = "unset";
    document.querySelector("#CreationArea").style.left = "unset";
    document.querySelector("#FilterArea").style.left = "unset";
    document.querySelector("#BunchArea").style.left = "unset";
}

function PanelsLeft() {
    document.querySelector(".MainSection").style.marginLeft = "420px";
    document.querySelector("#SA-TopRow").style.marginLeft = "420px";
    document.querySelector("#SelectionSection").style.marginLeft = "420px";
    document.querySelector("#PanelArea").style.left = "0";
    document.querySelector("#LoginArea").style.left = "0";
    document.querySelector("#ViewingArea").style.left = "0";
    document.querySelector("#CreationArea").style.left = "0";
    document.querySelector("#FilterArea").style.left = "0";
    document.querySelector("#BunchArea").style.left = "0";

    document.querySelector(".MainSection").style.marginRight = "unset";
    document.querySelector("#SA-TopRow").style.marginRight = "unset";
    document.querySelector("#SelectionSection").style.marginRight = "unset";
    document.querySelector("#PanelArea").style.right = "unset";
    document.querySelector("#LoginArea").style.right = "unset";
    document.querySelector("#ViewingArea").style.right = "unset";
    document.querySelector("#CreationArea").style.right = "unset";
    document.querySelector("#FilterArea").style.right = "unset";
    document.querySelector("#BunchArea").style.right = "unset";
}

$('.PA-HoverButton').click(function () {
    if (hoverInfo == false) {
        hoverInfo = true;
        localStorage.setItem('hoverInfo', "1");
        document.querySelector(".PA-HoverButton").innerHTML = "On";
    } else {
        hoverInfo = false;
        localStorage.setItem('hoverInfo', "0");
        document.querySelector(".PA-HoverButton").innerHTML = "Off";
    }
});

$('.PA-DexNumberButton').click(function () {
    if (dexNumber == false) {
        dexNumber = true;
        localStorage.setItem('dexNumber', "1");
        document.querySelector(".PA-DexNumberButton").innerHTML = "On";
    } else {
        dexNumber = false;
        localStorage.setItem('dexNumber', "0");
        document.querySelector(".PA-DexNumberButton").innerHTML = "Off";
    }
});

$('.PA-AdvancedPreviewButton').click(function () {
    if (advancedPreview == false) {
        advancedPreview = true;
        localStorage.setItem('advancedPreview', "1");
        document.querySelector(".PA-AdvancedPreviewButton").innerHTML = "On";
    } else {
        advancedPreview = false;
        localStorage.setItem('advancedPreview', "0");
        document.querySelector(".PA-AdvancedPreviewButton").innerHTML = "Off";
    }
});

$('.PA-OldSpritesButton').click(function () {
    if (oldSprites == false) {
        oldSprites = true;
        localStorage.setItem('oldSprites', "1");
        document.querySelector(".PA-OldSpritesButton").innerHTML = "On";
    } else {
        oldSprites = false;
        localStorage.setItem('oldSprites', "0");
        document.querySelector(".PA-OldSpritesButton").innerHTML = "Off";
    }
});

$('.PA-ExactIVsButton').click(function () {
    if (exactIVs == false) {
        exactIVs = true;
        localStorage.setItem('exactIVs', "1");
        document.querySelector(".PA-ExactIVsButton").innerHTML = "On";
    } else {
        exactIVs = false;
        localStorage.setItem('exactIVs', "0");
        document.querySelector(".PA-ExactIVsButton").innerHTML = "Off";
    }
});

$('.PA-EmptyBunchesButton').click(function () {
    if (emptyBunches == false) {
        emptyBunches = true;
        localStorage.setItem('emptyBunches', "1");
        showEmpty = "yes";
        document.querySelector(".PA-EmptyBunchesButton").innerHTML = "On";
    } else {
        emptyBunches = false;
        localStorage.setItem('emptyBunches', "0");
        showEmpty = "";
        document.querySelector(".PA-EmptyBunchesButton").innerHTML = "Off";
    }
    console.log(showEmpty);
});


function TradeShopInfo(data) {
    if (data != "") {
        searchData = jQuery.parseJSON(data);
        console.log(searchData);
        document.querySelector(".PA-TradeShopInfo").innerHTML = searchData.username + "'s " + "TradeShop";
        customMessage.value = searchData.personal_text;
        if (searchData.personal_text == null) {
            customMessage.value = "(No Personal Message)";
        }
        document.querySelector(".PA-Message").style.height = "";
        document.querySelector(".PA-Message").style.height = document.querySelector(".PA-Message").scrollHeight - 25 + "px";
        document.querySelector(".VA-Username").innerHTML = searchData.username + "#" + searchData.user_id;
        PostGenerateSelectionData();
    } else if (searchInfoText == "") {
        document.querySelector(".PA-TradeShopInfo").innerHTML = " Search TradeShops";

        customMessage.value = 'Type in a SearchID in the InputField to bring up their TradeShop. Afterwards, (scroll down if on mobile) click on any of the Bunches below to open them and see the Pokemon within.';
        $(".PA-Message").keyup();
        document.querySelector(".PA-Message").style.height = "";
        document.querySelector(".PA-Message").style.height = document.querySelector(".PA-Message").scrollHeight - 25 + "px";
    } else {
        document.querySelector(".PA-TradeShopInfo").innerHTML = " Search TradeShops";
        customMessage.value = "(No Personal Message)";
        document.querySelector(".PA-Message").style.height = "";
        document.querySelector(".PA-Message").style.height = document.querySelector(".PA-Message").scrollHeight - 25 + "px";
    }
}

//Checking if the user is allowed to create and move data in the selection area.
function ModifyCheck(data) {
    if (data != "" && searchInfoText != "") {
        document.querySelector(".SA-MoveButton").style.pointerEvents = "initial";
        document.querySelector(".SA-MoveButton").style.backgroundColor = "#efefef";
        document.querySelector(".SA-CopyButton").style.pointerEvents = "initial";
        document.querySelector(".SA-CopyButton").style.backgroundColor = "#efefef";
        document.querySelector(".SA-CreateButton").style.pointerEvents = "initial";
        document.querySelector(".SA-CreateButton").style.backgroundColor = "#efefef";
        document.querySelector(".PA-ForTradeBunchEdit").style.pointerEvents = "initial";
        document.querySelector(".PA-ForTradeBunchEdit").style.backgroundColor = "#efefef";
        document.querySelector(".PA-ForTradeBunchEdit").style.visibility = "visible";
        document.querySelector(".PA-ForTradeBunchMove").style.pointerEvents = "initial";
        document.querySelector(".PA-ForTradeBunchMove").style.backgroundColor = "#efefef";
        document.querySelector(".PA-ForTradeBunchMove").style.visibility = "visible";
        document.querySelector(".PA-LookingForBunchEdit").style.pointerEvents = "initial";
        document.querySelector(".PA-LookingForBunchEdit").style.backgroundColor = "#efefef";
        document.querySelector(".PA-LookingForBunchEdit").style.visibility = "visible";
        document.querySelector(".PA-LookingForBunchMove").style.pointerEvents = "initial";
        document.querySelector(".PA-LookingForBunchMove").style.backgroundColor = "#efefef";
        document.querySelector(".PA-LookingForBunchMove").style.visibility = "visible";
        document.querySelector(".PA-BunchHelp").style.visibility = "visible";
        filterDisplay.disabled = false;
        if (searchInfoText != "") {
            document.querySelector(".PA-Message").disabled = false;
        }
    } else {
        document.querySelector(".SA-MoveButton").style.pointerEvents = "none";
        document.querySelector(".SA-MoveButton").style.backgroundColor = "grey";
        document.querySelector(".SA-CopyButton").style.pointerEvents = "none";
        document.querySelector(".SA-CopyButton").style.backgroundColor = "grey";
        document.querySelector(".SA-CreateButton").style.pointerEvents = "none";
        document.querySelector(".SA-CreateButton").style.backgroundColor = "grey";
        document.querySelector(".PA-ForTradeBunchEdit").style.pointerEvents = "none";
        document.querySelector(".PA-ForTradeBunchEdit").style.backgroundColor = "grey";
        document.querySelector(".PA-ForTradeBunchEdit").style.visibility = "hidden";
        document.querySelector(".PA-ForTradeBunchMove").style.pointerEvents = "none";
        document.querySelector(".PA-ForTradeBunchMove").style.backgroundColor = "grey";
        document.querySelector(".PA-ForTradeBunchMove").style.visibility = "hidden";
        document.querySelector(".PA-LookingForBunchEdit").style.pointerEvents = "none";
        document.querySelector(".PA-LookingForBunchEdit").style.backgroundColor = "grey";
        document.querySelector(".PA-LookingForBunchEdit").style.visibility = "hidden";
        document.querySelector(".PA-LookingForBunchMove").style.pointerEvents = "none";
        document.querySelector(".PA-LookingForBunchMove").style.backgroundColor = "grey";
        document.querySelector(".PA-LookingForBunchMove").style.visibility = "hidden";
        document.querySelector(".PA-BunchHelp").style.visibility = "hidden";
        filterDisplay.disabled = true;
        document.querySelector(".PA-Message").disabled = true;
    }
}

//Checking if the user is allowed to modify and delete data in the viewing area.
function ModifyCheckViewing(data) {
    if (data != "") {
        document.querySelector(".VA-ModifyButton").style.pointerEvents = "initial";
        document.querySelector(".VA-ModifyButton").style.backgroundColor = "#efefef";
        document.querySelector(".VA-DeleteButton").style.pointerEvents = "initial";
        document.querySelector(".VA-DeleteButton").style.backgroundColor = "#efefef";
        document.querySelector(".VA-AddButton").style.pointerEvents = "none";
        document.querySelector(".VA-AddButton").style.backgroundColor = "grey";
    } else {
        document.querySelector(".VA-ModifyButton").style.pointerEvents = "none";
        document.querySelector(".VA-ModifyButton").style.backgroundColor = "grey";
        document.querySelector(".VA-DeleteButton").style.pointerEvents = "none";
        document.querySelector(".VA-DeleteButton").style.backgroundColor = "grey";
        if (token != null) {
            document.querySelector(".VA-AddButton").style.pointerEvents = "initial";
            document.querySelector(".VA-AddButton").style.backgroundColor = "#efefef";
        }
    }
}

function UpdatePersonalText() {
    $.post(url + "/PHP/update_text.php", { token: token, personalText: customMessage.value });
    searchData.personal_text = customMessage.value;
}

function BunchMoveStarted() {
    document.querySelector(".SA-MainMenu").style.pointerEvents = "none";
    document.querySelector(".SA-MainMenu").style.backgroundColor = "grey";
    document.querySelector(".SA-CreateButton").style.pointerEvents = "none";
    document.querySelector(".SA-CreateButton").style.backgroundColor = "grey";
    document.querySelector(".SA-MoveButton").style.pointerEvents = "none";
    document.querySelector(".SA-MoveButton").style.backgroundColor = "grey";
    document.querySelector(".SA-CopyButton").style.pointerEvents = "none";
    document.querySelector(".SA-CopyButton").style.backgroundColor = "grey";
    document.querySelector(".SA-FiltersButton").style.pointerEvents = "none";
    document.querySelector(".SA-FiltersButton").style.backgroundColor = "grey";
    document.querySelector(".SA-Searchbar").disabled = true;
    document.querySelector(".VA-ModifyButton").style.pointerEvents = "none";
    document.querySelector(".VA-ModifyButton").style.backgroundColor = "grey";
    document.querySelector(".VA-DeleteButton").style.pointerEvents = "none";
    document.querySelector(".VA-DeleteButton").style.backgroundColor = "grey";
    document.querySelector(".PA-Searchbar").disabled = true;
    document.querySelector(".PA-ForTradeBunchEdit").style.pointerEvents = "none";
    document.querySelector(".PA-ForTradeBunchEdit").style.backgroundColor = "grey";
    document.querySelector(".PA-LookingForBunchEdit").style.pointerEvents = "none";
    document.querySelector(".PA-LookingForBunchEdit").style.backgroundColor = "grey";
    document.querySelector("#MainArea").style.pointerEvents = "none";
}

function BunchMoveFinished() {
    document.querySelector(".SA-MainMenu").style.pointerEvents = "initial";
    document.querySelector(".SA-MainMenu").style.backgroundColor = "#efefef";
    document.querySelector(".SA-CreateButton").style.pointerEvents = "initial";
    document.querySelector(".SA-CreateButton").style.backgroundColor = "#efefef";
    document.querySelector(".SA-MoveButton").style.pointerEvents = "initial";
    document.querySelector(".SA-MoveButton").style.backgroundColor = "#efefef";
    document.querySelector(".SA-CopyButton").style.pointerEvents = "initial";
    document.querySelector(".SA-CopyButton").style.backgroundColor = "#efefef";
    document.querySelector(".SA-FiltersButton").style.pointerEvents = "initial";
    if (filtersApplied) {
        document.querySelector(".SA-FiltersButton").style.backgroundColor = "orchid";
    } else {
        document.querySelector(".SA-FiltersButton").style.backgroundColor = "#efefef";
    }
    document.querySelector(".SA-Searchbar").disabled = false;
    document.querySelector(".VA-ModifyButton").style.pointerEvents = "initial";
    document.querySelector(".VA-ModifyButton").style.backgroundColor = "#efefef";
    document.querySelector(".VA-DeleteButton").style.pointerEvents = "initial";
    document.querySelector(".VA-DeleteButton").style.backgroundColor = "#efefef";
    document.querySelector("#GeneratedSelection").style.pointerEvents = "initial";
    document.querySelector("#PA-ForTradeBunches").style.pointerEvents = "initial";
    document.querySelector(".PA-ForTradeBunchEdit").style.pointerEvents = "initial";
    document.querySelector(".PA-ForTradeBunchEdit").style.backgroundColor = "#efefef";
    document.querySelector(".PA-ForTradeBunchMove").style.pointerEvents = "initial";
    document.querySelector(".PA-ForTradeBunchMove").style.backgroundColor = "#efefef";
    document.querySelector("#PA-LookingForBunches").style.pointerEvents = "initial";
    document.querySelector(".PA-LookingForBunchEdit").style.pointerEvents = "initial";
    document.querySelector(".PA-LookingForBunchEdit").style.backgroundColor = "#efefef";
    document.querySelector(".PA-LookingForBunchMove").style.pointerEvents = "initial";
    document.querySelector(".PA-LookingForBunchMove").style.backgroundColor = "#efefef";
    document.querySelector("#MainArea").style.pointerEvents = "initial";
    document.querySelector(".PA-Searchbar").disabled = false;

}

function PostGenerateSelectionData() {

    $.post(url + "/PHP/generate_bunch_selection.php", { token: token, searchID: searchData.user_id, tradeOption: "For Trade", showEmpty: showEmpty }, ForTradeData);

    $.post(url + "/PHP/generate_bunch_selection.php", { token: token, searchID: searchData.user_id, tradeOption: "Looking For", showEmpty: showEmpty }, LookingForData);

}

function RemoveBunchOutline() {
    for (let i = 0; i < ftBunches; i++) {
        document.querySelector(".ForTradeGridDiv" + (i)).style.boxShadow = "inset 0px 0px 0px 3.5px #AF9946";
        document.querySelector(".ForTradeGridDiv" + (i)).style.backgroundColor = "#2E2D2D";
    }

    for (let i = 0; i < lfBunches; i++) {
        document.querySelector(".LookingForGridDiv" + (i)).style.boxShadow = "inset 0px 0px 0px 3.5px #AF9946";
        document.querySelector(".LookingForGridDiv" + (i)).style.backgroundColor = "#2E2D2D";
    }
}

function ForTradeData(data) {
    //Removing the grid container so I can create a new one and making it a child of GeneratedBunches.
    $("#ForTradeContainer").remove();

    /*tradeText = document.createElement("text");
    tradeText.setAttribute("class", "PA-FTAvailableBunchesText");
    tradeText.innerHTML = "For Trade";
    document.getElementById("PA-ForTradeBunches").appendChild(tradeText);*/

    gridTest = document.createElement("div");
    gridTest.setAttribute("id", "ForTradeContainer");
    document.getElementById("PA-ForTradeBunches").appendChild(gridTest);


    //The Below is hard coding the "All Pokemon" bunch.
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "ForTradeGridDiv");
    document.getElementById("ForTradeContainer").appendChild(newDiv);
    newDiv.setAttribute("width", "100");
    newDiv.setAttribute("height", "100");

    theImage = document.createElement("IMG");
    theImage.setAttribute("id", "GeneratedBunches All");
    theImage.setAttribute("src", url + "/Resources/Home/Arceus.png");
    theImage.setAttribute("min-width", "100");
    theImage.setAttribute("height", "100");
    newDiv.appendChild(theImage);
    document.querySelector(".ForTradeGridDiv").style.boxShadow = "inset 0px 0px 0px 3.5px #AF9946";
    document.querySelector(".ForTradeGridDiv").style.backgroundColor = "#2E2D2D";
    document.querySelector(".ForTradeGridDiv").style.borderTopLeftRadius = "15px";
    document.querySelector(".ForTradeGridDiv").style.borderTopRightRadius = "15px";
    document.querySelector(".ForTradeGridDiv").style.borderBottomLeftRadius = "15px";
    document.querySelector(".ForTradeGridDiv").style.borderBottomRightRadius = "15px";
    document.querySelector(".ForTradeGridDiv").style.width = "100%";
    document.querySelector(".ForTradeGridDiv").style.height = "100%";

    theText = document.createElement("P")
    theText.setAttribute("class", "theText");
    theText.innerHTML = "All Pokemon";
    newDiv.appendChild(theText);

    newDiv.onclick = function () {
        if (currentlyRearranging == false) {
            document.querySelector(".SA-Bunch").innerHTML = "All Pokemon";
            bunchname = "All Pokemon";
            document.querySelector("#MainArea").style.display = "none";
            document.querySelector("#SelectionArea").style.display = "grid";
            tradeOption = "For Trade";
            ShowLoading();
            PostGenerateSelection();
            $.post(url + "/PHP/modify_check.php", { token: token, searchID: searchInfoText }, ModifyCheck);
            //$.post(url + "/PHP/generate_selection.php", { token: token, searchID: searchData.user_id, tradeOption: tradeOption, bunchname: bunchname }, GenerateSelection);
        }
    }
    //Using Jquery to parse the data and getting the length.
    ftData = jQuery.parseJSON(data);
    if (ftData["Rows"] != null) {
        ftBunches = ftData["Rows"].length;
        console.log(ftBunches);
        console.log(ftData);



        for (let i = 0; i < ftBunches; i++) {

            //Creating newDivs for each bunch and making them children of the GridContainer
            newDiv = document.createElement("div");
            newDiv.setAttribute("class", "ForTradeGridDiv" + (i));
            document.getElementById("ForTradeContainer").appendChild(newDiv);
            newDiv.setAttribute("width", "100");
            newDiv.setAttribute("height", "100");
            document.querySelector(".ForTradeGridDiv" + (i)).style.boxShadow = "inset 0px 0px 0px 3.5px #AF9946";
            document.querySelector(".ForTradeGridDiv" + (i)).style.backgroundColor = "#2E2D2D";
            document.querySelector(".ForTradeGridDiv" + (i)).style.borderTopLeftRadius = "15px";
            document.querySelector(".ForTradeGridDiv" + (i)).style.borderTopRightRadius = "15px";
            document.querySelector(".ForTradeGridDiv" + (i)).style.borderBottomLeftRadius = "15px";
            document.querySelector(".ForTradeGridDiv" + (i)).style.borderBottomRightRadius = "15px";
            document.querySelector(".ForTradeGridDiv" + (i)).style.width = "100%";
            document.querySelector(".ForTradeGridDiv" + (i)).style.height = "100%";

            //Storing each bunch in a array.
            bunchArray = [];
            bunchArray = ftData["Rows"][i];
            theImage = document.createElement("IMG");
            theImage.setAttribute("id", "GeneratedBunches " + (i));

            //Setting the Icon
            if (iconExclusivesArray.includes(bunchArray.icon)) {
                if (allBallsArray.includes(bunchArray.icon) || bunchArray.icon == "Egg") {
                    theImage.setAttribute("src", url + "/Resources/Images/Dreamworld Artwork/Small Icons/" + bunchArray.icon + ".png");
                }
                else if (bunchArray.icon.includes("HP")) {
                    theImage.setAttribute("src", url + "/Resources/Misc/" + bunchArray.icon + ".png");
                } else {
                    if (bunchArray.shiny == "Shiny") {
                        theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Shiny" + ".png");
                    } else {
                        theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + ".png");
                    }
                }
            } else {
                if (genderDifferencesArray.includes(bunchArray.icon)) {
                    if (bunchArray.gender == "Male" || bunchArray.gender == "(Any Gender)") {
                        console.log("WOOOORK")
                        if (bunchArray.shiny.includes("Normal")) {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Male.png");
                        }
                        else if (!bunchArray.shiny.includes("Normal")) {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Male-Shiny.png");
                        }
                    }
                    else if (bunchArray.gender == "Female") {
                        if (bunchArray.shiny.includes("Normal")) {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Female.png");
                        }
                        else if (!bunchArray.shiny.includes("Normal")) {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Female-Shiny.png");
                        }
                    }
                } else {
                    if (bunchArray.shiny.includes("Normal")) {
                        theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + ".png")
                    }
                    else {
                        if (shinyExceptionArray.includes(bunchArray.icon)) {
                            if (bunchArray.icon.includes("Minior")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Minior-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Strawberry")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Strawberry-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Berry")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Berry-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Love")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Love-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Star")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Star-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Clover")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Clover-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Flower")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Flower-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Ribbon")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Ribbon-Shiny.png");
                            }
                        }
                        else {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Shiny.png")
                        }
                    }
                }
            }

            //Setting Image and Text Attributes
            theImage.setAttribute("width", "100");
            theImage.setAttribute("height", "100");
            newDiv.appendChild(theImage);

            theText = document.createElement("P")

            theText.setAttribute("class", "theText");
            theText.innerHTML = bunchArray.name;
            newDiv.appendChild(theText);


            //Creating an Onclick for the Div to open the relevant bunch
            newDiv.onclick = function () {
                if (currentlyRearranging != true) {
                    tradeOption = "For Trade";
                    $.post(url + "/PHP/generate_all_bunches.php", { token: token, tradeOption: tradeOption }, UserBunches);
                    bunchDetails = ftData["Rows"][i];
                    console.log(bunchDetails);
                    let bunch = bunchDetails.name;
                    console.log(bunch);
                    bunchname = bunch;
                    document.querySelector(".SA-Bunch").innerHTML = bunch;
                    document.querySelector("#MainArea").style.display = "none";
                    document.querySelector("#SelectionArea").style.display = "grid";
                    tradeOption = "For Trade";
                    $("#GridContainer").remove();
                    ShowLoading();
                    PostGenerateSelection();
                    $.post(url + "/PHP/modify_check.php", { token: token, searchID: searchInfoText }, ModifyCheck);
                    //$.post(url + "/PHP/generate_selection.php", { token: token, searchID: searchData.user_id, tradeOption: tradeOption, bunchname: bunch }, GenerateSelection);
                } else {
                    if (oldPosition == "") {
                        oldPosition = ftData["Rows"][i].position;
                        tempCreationID = ftData["Rows"][i].creation_id;
                        console.log(oldPosition);
                        document.querySelector(".ForTradeGridDiv" + (i)).style.boxShadow = "inset 0px 0px 0px 3.5px #989898ff";
                        document.querySelector(".ForTradeGridDiv" + (i)).style.backgroundColor = "#2E2D2D";
                        document.querySelector(".ForTradeGridDiv" + (i)).style.opacity = "100%";
                        document.querySelector("#PA-LookingForBunches").style.pointerEvents = "none";
                    } else {
                        newPosition = ftData["Rows"][i].position;
                        console.log(newPosition);
                        tradeOption = "For Trade";
                        if (oldPosition != newPosition) {
                            $.post(url + "/PHP/move_bunch.php", { token: token, creationID: tempCreationID, firstSelection: oldPosition, secondSelection: newPosition, tradeOption: tradeOption }, MoveBunch);
                            //$(".PA-FTAvailableBunchesText").remove();
                        } else {
                            document.querySelector(".PA-ForTradeBunchMove").innerHTML = "Move For Trade Bunches";
                            currentlyRearranging = false;
                            oldPosition = "";
                            newPosition = "";
                            RemoveBunchOutline();
                        }
                    }
                }

            }
        }
    }
    HideLoading();
}

function LookingForData(data) {
    //Removing the grid container so I can create a new one and making it a child of GeneratedBunches.
    $("#LookingForContainer").remove();

    /*tradeText = document.createElement("text");
    tradeText.setAttribute("class", "PA-LFAvailableBunchesText");
    tradeText.innerHTML = "Looking For";
    document.getElementById("PA-LookingForBunches").appendChild(tradeText);*/

    gridTest = document.createElement("div");
    gridTest.setAttribute("id", "LookingForContainer");
    document.getElementById("PA-LookingForBunches").appendChild(gridTest);

    //The Below is hard coding the "All Pokemon" bunch.
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "LookingForGridDiv");
    document.getElementById("LookingForContainer").appendChild(newDiv);
    newDiv.setAttribute("width", "100");
    newDiv.setAttribute("height", "100");
    document.querySelector(".LookingForGridDiv").style.boxShadow = "inset 0px 0px 0px 3.5px #AF9946";
    document.querySelector(".LookingForGridDiv").style.backgroundColor = "#2E2D2D";
    document.querySelector(".LookingForGridDiv").style.borderTopLeftRadius = "15px";
    document.querySelector(".LookingForGridDiv").style.borderTopRightRadius = "15px";
    document.querySelector(".LookingForGridDiv").style.borderBottomLeftRadius = "15px";
    document.querySelector(".LookingForGridDiv").style.borderBottomRightRadius = "15px";
    document.querySelector(".LookingForGridDiv").style.width = "100%";
    document.querySelector(".LookingForGridDiv").style.height = "100%";

    theImage = document.createElement("IMG");
    theImage.setAttribute("id", "GeneratedBunches All");
    theImage.setAttribute("src", url + "/Resources/Home/Arceus.png");
    theImage.setAttribute("min-width", "100");
    theImage.setAttribute("height", "100");
    newDiv.appendChild(theImage);

    theText = document.createElement("P")
    theText.setAttribute("class", "theText");
    theText.innerHTML = "All Pokemon";
    newDiv.appendChild(theText);

    newDiv.onclick = function () {
        if (currentlyRearranging == false) {
            document.querySelector(".SA-Bunch").innerHTML = "All Pokemon";
            bunchname = "All Pokemon";
            document.querySelector("#MainArea").style.display = "none";
            document.querySelector("#SelectionArea").style.display = "grid";
            tradeOption = "Looking For";
            $("#GridContainer").remove();
            ShowLoading();
            PostGenerateSelection();
            $.post(url + "/PHP/modify_check.php", { token: token, searchID: searchInfoText }, ModifyCheck);
            //$.post(url + "/PHP/generate_selection.php", { token: token, searchID: searchData.user_id, tradeOption: tradeOption, bunchname: bunchname }, GenerateSelection);
        }
    }
    //Using Jquery to parse the data and getting the length.
    lfData = jQuery.parseJSON(data);
    if (lfData["Rows"] != null) {
        lfBunches = lfData["Rows"].length;
        console.log(lfBunches);
        console.log(lfData);



        for (let i = 0; i < lfBunches; i++) {

            //Creating newDivs for each bunch and making them children of the GridContainer
            newDiv = document.createElement("div");
            newDiv.setAttribute("class", "LookingForGridDiv" + (i));
            document.getElementById("LookingForContainer").appendChild(newDiv);
            newDiv.setAttribute("width", "100");
            newDiv.setAttribute("height", "100");
            document.querySelector(".LookingForGridDiv" + (i)).style.boxShadow = "inset 0px 0px 0px 3.5px #AF9946";
            document.querySelector(".LookingForGridDiv" + (i)).style.backgroundColor = "#2E2D2D";
            document.querySelector(".LookingForGridDiv" + (i)).style.borderTopLeftRadius = "15px";
            document.querySelector(".LookingForGridDiv" + (i)).style.borderTopRightRadius = "15px";
            document.querySelector(".LookingForGridDiv" + (i)).style.borderBottomLeftRadius = "15px";
            document.querySelector(".LookingForGridDiv" + (i)).style.borderBottomRightRadius = "15px";
            document.querySelector(".LookingForGridDiv" + (i)).style.width = "100%";
            document.querySelector(".LookingForGridDiv" + (i)).style.height = "100%";

            //Storing each bunch in a array.
            bunchArray = [];
            bunchArray = lfData["Rows"][i];
            theImage = document.createElement("IMG");
            theImage.setAttribute("id", "GeneratedBunches " + (i));

            //Setting the Icon
            if (iconExclusivesArray.includes(bunchArray.icon)) {
                if (allBallsArray.includes(bunchArray.icon) || bunchArray.icon == "Egg") {
                    theImage.setAttribute("src", url + "/Resources/Images/Dreamworld Artwork/Small Icons/" + bunchArray.icon + ".png");
                }
                else if (bunchArray.icon.includes("HP")) {
                    theImage.setAttribute("src", url + "/Resources/Misc/" + bunchArray.icon + ".png");
                } else {
                    if (bunchArray.shiny == "Shiny") {
                        theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Shiny" + ".png");
                    } else {
                        theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + ".png");
                    }
                }
            } else {
                if (genderDifferencesArray.includes(bunchArray.icon)) {
                    if (bunchArray.gender == "Male" || bunchArray.gender == "(Any Gender)") {
                        console.log("WOOOORK")
                        if (bunchArray.shiny.includes("Normal")) {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Male.png");
                        }
                        else if (!bunchArray.shiny.includes("Normal")) {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Male-Shiny.png");
                        }
                    }
                    else if (bunchArray.gender == "Female") {
                        if (bunchArray.shiny.includes("Normal")) {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Female.png");
                        }
                        else if (!bunchArray.shiny.includes("Normal")) {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Female-Shiny.png");
                        }
                    }
                } else {
                    if (bunchArray.shiny.includes("Normal")) {
                        theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + ".png")
                    }
                    else {
                        if (shinyExceptionArray.includes(bunchArray.icon)) {
                            if (bunchArray.icon.includes("Minior")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Minior-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Strawberry")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Strawberry-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Berry")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Berry-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Love")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Love-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Star")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Star-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Clover")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Clover-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Flower")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Flower-Shiny.png");
                            }
                            else if (bunchArray.icon.includes("Alcremie-Ribbon")) {
                                theImage.setAttribute("src", url + "/Resources/Home/Alcremie-Ribbon-Shiny.png");
                            }
                        }
                        else {
                            theImage.setAttribute("src", url + "/Resources/Home/" + bunchArray.icon + "-Shiny.png")
                        }
                    }
                }
            }

            //Setting Image and Text Attributes
            theImage.setAttribute("width", "100");
            theImage.setAttribute("height", "100");
            newDiv.appendChild(theImage);

            theText = document.createElement("P")

            theText.setAttribute("class", "theText");
            theText.innerHTML = bunchArray.name;
            newDiv.appendChild(theText);


            //Creating an Onclick for the Div to open the relevant bunch
            newDiv.onclick = function () {
                tradeOption = "Looking For";
                $.post(url + "/PHP/generate_all_bunches.php", { token: token, tradeOption: tradeOption }, UserBunches);
                if (currentlyRearranging != true) {
                    bunchDetails = lfData["Rows"][i];
                    console.log(bunchDetails);
                    let bunch = bunchDetails.name;
                    console.log(bunch);
                    bunchname = bunch;
                    document.querySelector(".SA-Bunch").innerHTML = bunch;
                    document.querySelector("#MainArea").style.display = "none";
                    document.querySelector("#SelectionArea").style.display = "grid";
                    ShowLoading();
                    PostGenerateSelection();
                    $.post(url + "/PHP/modify_check.php", { token: token, searchID: searchInfoText }, ModifyCheck);
                    //$.post(url + "/PHP/generate_selection.php", { token: token, searchID: searchData.user_id, tradeOption: tradeOption, bunchname: bunch }, GenerateSelection);
                } else {
                    if (oldPosition == "") {
                        oldPosition = lfData["Rows"][i].position;
                        tempCreationID = lfData["Rows"][i].creation_id;
                        console.log(oldPosition);
                        document.querySelector(".LookingForGridDiv" + (i)).style.boxShadow = "inset 0px 0px 0px 3.5px #989898ff";
                        document.querySelector(".LookingForGridDiv" + (i)).style.backgroundColor = "#2E2D2D";
                        document.querySelector(".LookingForGridDiv" + (i)).style.opacity = "100%";
                        document.querySelector("#PA-ForTradeBunches").style.pointerEvents = "none";
                    } else {
                        newPosition = lfData["Rows"][i].position;
                        console.log(newPosition);
                        tradeOption = "Looking For";
                        if (oldPosition != newPosition) {
                            tradeOption = "Looking For";
                            $.post(url + "/PHP/move_bunch.php", { token: token, creationID: tempCreationID, firstSelection: oldPosition, secondSelection: newPosition, tradeOption: tradeOption }, MoveBunch);
                            //$(".PA-LFAvailableBunchesText").remove();
                        } else {
                            document.querySelector(".PA-LookingForBunchMove").innerHTML = "Move Looking For Bunches";
                            currentlyRearranging = false;
                            oldPosition = "";
                            newPosition = "";
                            RemoveBunchOutline();
                        }
                    }
                }

            }
        }
    }
    HideLoading();
}



