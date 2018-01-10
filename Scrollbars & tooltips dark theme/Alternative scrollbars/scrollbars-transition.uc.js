(function() {
    var css =`
scrollbar {
	z-index: 2147483647 !important;
	position: relative !important;
}

scrollbar,
scrollbar * {
	-moz-appearance: none !important;
	margin: 0px !important;
	padding: 0px !important;
	border: 0px !important;
	box-shadow: none !important;
}

scrollbar[orient="vertical"] {
	-moz-margin-start: 0px !important;
	max-width: 16px !important;
	min-width: 16px !important;
	
	background: linear-gradient(to right, #222, #444) !important;
	background-size: 16px 16px !important;
	background-repeat: repeat-y !important;
	background-position: 50% 0% !important;
	cursor: default;
}

scrollbar[orient="horizontal"] {
	margin-top: 0px !important;
	max-height: 16px !important;
	min-height: 16px !important;
    
	background: linear-gradient(#222, #444) !important;
	background-size: 16px 16px !important;
	background-repeat: repeat-x  !important;
	background-position: 0% 50% !important;
	cursor: default;
}

scrollbar thumb[orient="vertical"] {
	min-height: 32px !important;
	width: 16px !important;
	min-width: 16px !important;
	max-width: 16px !important;
	background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.7)) !important;
}

scrollbar thumb[orient="horizontal"] {
	min-width: 32px !important;
	height: 16px !important;
	min-height: 16px !important;
	max-height: 16px !important;
	background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)) !important;
}

scrollbar thumb {
	border-radius: 15px !important;
	background-color: #888 !important;
	transition: all 0.4s !important;
}

scrollbar:hover thumb[orient="vertical"] {
	background-color: #46b !important;

}

scrollbar:hover thumb[orient="horizontal"] {
	background-color: #46b !important;
}

scrollbar thumb[orient="vertical"]:active {
	background-color: #46b !important;
	border-radius: 3px !important;
}

scrollbar thumb[orient="horizontal"]:active {
	background-color: #46b !important;
	border-radius: 3px !important;
}

/* no buttons */
scrollbar scrollbarbutton{
	min-height: 0px !important;
	min-width: 0px !important;
	max-height: 16px !important;
	max-width: 16px !important;
	height: 0px !important;
	width: 0px !important;
	background: radial-gradient (circle, #888, #555);
}`;

    var sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
    var uri = makeURI('data:text/css;charset=UTF=8,' + encodeURIComponent(css));
    sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();