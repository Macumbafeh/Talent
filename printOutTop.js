//print out all the different types of talent trees
var i = 0;

var arrowYellowStyle = "hidden";
var arrowGreenStyle = "hidden";
var massiveReplaceString = "";

var talentDescriptionArray = new Array;

var imgDir = "";
var imgPath = "";
var pixelGif ="images/pixel.gif";
var theURLtoCopy =

massiveReplaceString += '<div class="talentwrap1"><div class="talentwrap2"><table border = "0" cellpadding = "0" cellspacing = "0"><tr><td class="nemaes">'+ nlclass +'<tr><td>';
massiveReplaceString += '<span id="facebook"></span>';

if (variableIsSite) {
	massiveReplaceString += '<div style = "position: relative; top: -12; left: 13;"><div style = "position: absolute;"><table border = "0" cellpadding = "0" cellspacing = "0"></td>';
	if (!lg)
		massiveReplaceString += '<td valign = "top"><img src = "'+ imgPath +'text-talents.png" /></td>';
	massiveReplaceString += '</tr></table></div></div>';
	iconSize = ' width = "43" height = "45"';
	resetDisplay = 'style = "display: block;"';
} else {
	imgDir = "armory/";
	iconSize = ' width = "32" height = "34"';
	resetDisplay = 'style = "display: none;"';
}

massiveReplaceString += '</td></tr><tr>';

//finally we get to arrange and print out all the info
for (var printTreeID = 0; printTreeID < numberOfTrees; printTreeID++) {
	var tier = 0;
	var treeID;		

  
	treeID = tree[printTreeID];	

	var treeName = nltree[printTreeID];
	treeName = treeName.toLowerCase();
	treeName = treeName.replace(" ", "");	
	
	//box top
	massiveReplaceString += '<td><table border = "0" cellpadding = "0" cellspacing = "0">';

	massiveReplaceString += '<tr><td class = ""></td>';
	massiveReplaceString += '<td class = ""></td>';
	massiveReplaceString += '<td class = "tablepixel"></td></tr>';
	
	massiveReplaceString += '<tr><td class = ""></td>';
	massiveReplaceString += '<td style = "background: url(\''+ imgPath +'/'+ nlclass +'images/'+ imgDir + treeName +'-bg2.jpg\') #000000 0 0 no-repeat; ">';	
	
	massiveReplaceString += '<div id = "'+ treeID +'Tree">';

	var vertical = tierNum;
	var verticalCounter;
	var horizontal = 4;			
	var horizontalCounter;	
	
	//begin while loop
	while (talent[i] && talent[i][0] == printTreeID &&  i != (talent.length - 1)){
	
		//if (talent[i][0] == printTreeID)
		//{	
			
			massiveReplaceString += '<table class="tal" border = "0" cellspacing = "0" cellpadding = "0"><tr><td class = "treePadding">';
			massiveReplaceString += '<table border = "0" cellpadding = "10" cellspacing = "0">';
			
			for (verticalCounter = 1; verticalCounter <= vertical; verticalCounter++)
			{
				massiveReplaceString += "<tr>";
				for (horizontalCounter = 1; horizontalCounter <= horizontal; horizontalCounter++)
				{
					massiveReplaceString += '<td class = "tdPaddingTen">';
					if (talent[i] && talent[i][3] == horizontalCounter && talent[i][4] == verticalCounter)
					{

					
						var imageName;
						talentName = talent[i][1];
						imageName = nltalent[i][0];
						imageName = imageName.toLowerCase();
						imageName = imageName.replace(":", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");

						massiveReplaceString += '<div id = "wrapper99"><div id = "rankTopStyle"><table><tr><td nowrap class = "tdPaddingThree">';					
						//rank
						if (rankTop[i][0] == talent[i][2]) {

							massiveReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmall2">';
							massiveReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmall22">';
						} else if(rankTop[i][0] > 0 ) {
							massiveReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmallGreen">';
							massiveReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmallGreen2">';
						} else {
							massiveReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmallOff">';
							massiveReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmallOff2">';
						}

						massiveReplaceString += rankTop[i][0] +'</span>/'+ talent[i][2] +'</span></td></tr></table></div></div>';

						//description
						massiveReplaceString += '<div id = "talentMouseOver'+ i +'" style = "visibility: hidden;"><div id = "wrapper">';

						tierTalent = talent[i][4];
						
						if (printTreeID != 2 && tierTalent != vertical) {
							massiveReplaceString += '<div id = "descriptionTopStyle">';
						} else if (printTreeID == 2 && tierTalent != vertical)  {
							massiveReplaceString += '<div id = "descriptionTopStyleThird">';
						} else if (printTreeID != 2 && tierTalent == vertical) {
							massiveReplaceString += '<div id = "descriptionTopStyleBottom">';
						} else {
							massiveReplaceString += '<div id = "descriptionTopStyleThirdBottom">';
						}
							
						massiveReplaceString += '<table border = "0" cellpadding = "0" cellspacing = "0" style="width:300px;"><tr><td></td>';
						massiveReplaceString += '<td bgcolor = "#d5d5d7" height = "1"></td><td></td></tr>';
						massiveReplaceString += '<tr><td bgcolor = "#a5a5a5" width = "1"><div style = "width: 1px;"></div></td>';
						massiveReplaceString += '<td><table width = "300" border = "0" cellspacing = "0" cellpadding = "5" bordercolor = "#000000"><tr><td bgcolor = "#020303" class = "tdPaddingFive">';
						massiveReplaceString += '<div id = "armoryOver'+ i +'"><span style = "color: white; font-weight: bold;" class="talentNameStyle">'+ talent[i][1] +'</span>';
						massiveReplaceString += '<br><span class = "rankTooltip">'+ textRankColon +' <span id = "modifyRankTopDescription'+ i +'" class = "rankTooltip">'+ rankTop[i][0] + '</span>/'+ talent[i][2] +'</span>';

						if (talent[i][5])	//if the talent requires other talents
						{
							requirement = talent[i][5][0];
							requirementPoints = talent[i][5][1];
							requirementName = talent[requirement][1];
						
							if (variableIsSite)
								massiveReplaceString += '<span id="requiresTalent'+ i +'" style = "color: red" class = "mySmall"><br>' + requiresRequires + ' '+ requirementPoints +' '+ requiresPointsIn + ' ' + requirementName +'</span>';			
						}
			
						if (talent[i][4] != 1 && variableIsSite)	//if the talent requires other talents
						{ 
							massiveReplaceString += '<span id = "requiresPoints'+ i +'" style = "color: red" class = "mySmall"><br>' + requiresRequires + ' '+ ((talent[i][4]*5)-5) +' '+ requiresPointsIn + ' ' + tree[talent[i][0]] +' '+ requiresTalents +'</span>';
						}

						massiveReplaceString += '<br /><span id = "modifyDescriptionTop'+ i +'" style = "padding-top: 8px !important; display: block; color: #FFFFFF" class="talentDescriptionStyle">'+ rankTop[i][1] +'</span>';

						//massiveReplaceString += '<div style = "width: 300px; height: 1px;"></div>';							

						if (variableIsSite)	{
						//description next
							massiveReplaceString += '<table border = "0" cellpadding = "0" cellspacing = "0" width = "100%" height = "0"><tr><td width = "50%"><br><span style = "color: #1ae91b; font-size: 12px;">'+ textLeftClick +'</span></td><td width = "50%" align = "right"><br><span style = "color: #fb1410; font-size: 12px;">'+ textRightClick +'</span></td></tr></table>';	
					}
						massiveReplaceString += '</div></td></tr></table></td><td bgcolor = "#a5a5a5" width = "1"><div style = "width: 1px;"></div></td></tr><tr><td></td><td bgcolor = "#4f4f4f" height = "2"></td><td></td></tr></table></div></div></div>';

							
						/*if (is_ie4up)
							massiveReplaceString += '<div style = "z-index: 5000; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "'+ pixelGif +'" width = "50" height = "50" border = "0" onDblClick = "rankTopOnClick('+ i +');" onClick = "rankTopOnClick('+ i +');" onMouseOver = "unhideTalent('+ i +');" onMouseOut = "hideTalent('+ i +');" onContextMenu = "rankTopOnRightClick('+ i +'); return false;" /></div></div>';
						else*/
						massiveReplaceString += '<div style = "z-index: 5000; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "'+ pixelGif +'" width = "50" height = "50" border = "0" onClick = "rankTopOnClick('+ i +');" onMouseOver = "unhideTalent('+ i +');" onMouseOut = "hideTalent('+ i +');" onContextMenu = "rankTopOnRightClick('+ i +'); return false;" /></div></div>';
						
						massiveReplaceString += '<div style = "z-index: 50; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "http://calculator.hellground.net/data/images/icon-over-grey.gif" border = "0" /></div></div>';


						if (rankTop[i][0] >= 1)
							massiveReplaceString += '<div id = "iconOverGreen'+ i +'" style = "position: relative; z-index:50;"><div id = "iconOver"><img src = "http://calculator.hellground.net/data/images/icon-over-green.gif" border = "0" /></div></div>';
						else
							massiveReplaceString += '<div id = "iconOverGreen'+ i +'" style = "visibility:hidden; position: relative; z-index:50;"><div id = "iconOver"><img src = "http://calculator.hellground.net/data/images/icon-over-green.gif" border = "0"></div></div>';

						if (rankTop[i][0] == talent[i][2])
							massiveReplaceString += '<div id = "iconOverYellow'+ i +'" style = "position: relative; z-index:50;"><div id = "iconOver"><img src = "http://calculator.hellground.net/data/images/icon-over-yellow.gif" border = "0"></div></div>';
						else 
							massiveReplaceString += '<div id = "iconOverYellow'+ i +'" style = "visibility:hidden; position: relative; z-index:50;"><div id = "iconOver"><img src = "http://calculator.hellground.net/data/images/icon-over-yellow.gif" border = "0"></div></div>';

						if (rankTop[i][0] == 0)							
							massiveReplaceString += '<div id = "talentThumb'+ i +'" style = "visibility: hidden; position: relative;"><div id = "wrapper49"><img src = "'+ nlclass +'images/icons/'+ imageName +'.png" border = "0" '+ iconSize+'></div></div>';
						else
							massiveReplaceString += '<div id = "talentThumb'+ i +'" style = "position: relative; display:none;"><div id = "wrapper49"><img src = "'+ nlclass +'images/icons/'+ imageName +'.png" border = "0" '+ iconSize+'></div></div>';							
						if (talent[i][5]) {
									
							thisTalentX = talent[i][3];		
							thisTalentY = talent[i][4];

							requiredTalentX = talent[requirement][3];
							requiredTalentY = talent[requirement][4];

							if (query) {
								if (saveTemplate[i] == talent[i][2]) {
									arrowYellowStyle = "visible";
									arrowGreenStyle = "hidden";
								} else if (saveTemplate[i] > 0) {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "visible";
								} else {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "hidden";
								}
							} else {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "hidden";
							}

							if (thisTalentX == requiredTalentX) {  //up and down
							
								if ((thisTalentY - 1) == requiredTalentY) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><img src = "'+ imgPath +'images/arrows/down-1-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><span id="arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/down-1-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><span id="arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/down-1-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 2) == requiredTalentY) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><img src = "'+ imgPath +'images/arrows/down-2-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><span id = "arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/down-2-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/down-2-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 3) == requiredTalentY) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><img src = "'+ imgPath +'images/arrows/down-3-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/down-3-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/down-3-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 4) == requiredTalentY) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><img src = "'+ imgPath +'images/arrows/down-4-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><span id = "arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/down-4-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><span id="arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/down-4-yellow.gif"></span></div></div>';
								}
							} else if (thisTalentY == requiredTalentY) {  //across
								if (requiredTalentX == (thisTalentX - 1)) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><img src = "'+ imgPath +'images/arrows/across-right-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/across-right-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/across-right-yellow.gif"></span></div></div>';
								} else if (requiredTalentX == (thisTalentX + 1)) {
									massiveReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><img src = "'+ imgPath +'images/arrows/across-left-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/across-left-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/across-left-yellow.gif"></span></div></div>';
								}
							} else if (thisTalentX == (requiredTalentX-1)){
								if ((thisTalentY - 1) == requiredTalentY) {												
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><img src = "'+ imgPath +'images/arrows/down-left-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/down-left-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/down-left-yellow.gif"></span></div></div>';
								} else {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><img src = "'+ imgPath +'images/arrows/down-2-left-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/down-2-left-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/down-2-left-yellow.gif"></span></div></div>';
								}
							} else if ((thisTalentX-1) == requiredTalentX) {								
								if ((thisTalentY - 1) == requiredTalentY) {				
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><img src = "'+ imgPath +'images/arrows/down-right-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/down-right-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/down-right-yellow.gif"></span></div></div>';
								} else {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><img src = "'+ imgPath +'images/arrows/down-2-right-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "'+ imgPath +'images/arrows/down-2-right-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "'+ imgPath +'images/arrows/down-2-right-yellow.gif"></span></div></div>';									
								}
							}
							
						}
							massiveReplaceString += '<img src = "images/pixel.gif" width="43" height="45" border="0">';
						i++;
					}
					else
						massiveReplaceString += "&nbsp;";
					massiveReplaceString += "</td>";						
				}
				massiveReplaceString += "</tr>";
			}

			massiveReplaceString += "</table></td></tr></table>";
			massiveReplaceString += "</div>";		
			
	}		

	
	//box bottom
 massiveReplaceString += '</td><td class = ""><div style = ""></div></td></tr>';
	massiveReplaceString += '<tr><td class = ""></td>';
	
	massiveReplaceString += '<td class="">';
	massiveReplaceString += '<table class="';
	massiveReplaceString += '\
	<tr>\
		<td class=""></td>\
		<td width="100%" nowrap class="">\
				<div class="talenttreename">\
				<img src="'+ imgPath +'images/trees/'+ nlclass + printTreeID +'.png" class="p talenttreeicon" align="left"><span class = "treeName">&nbsp;'+ tree[printTreeID] +'</span><span class = "treeColon">'+ textColon +' <span class = "treePoint" id="'+tree[printTreeID]+'tabPoints">'+ pointsTree[printTreeID] +'</span> <span class = "treePoints" id="'+tree[printTreeID]+'tabPointsText">'+ textPoints +'</span></span></nobr>\
			</div>\
		</td>\
		<td>\
			<div style = "position:relative; left:3px;"><a '+ resetDisplay +' id = "hideReset'+ printTreeID +'" href = "#none" onclick = "resetTree('+ printTreeID +')")"><img src="images/reset.gif"></div>\
		</td>\
		<td class = ""></td>\
	</tr>\
	</table>';
	
	massiveReplaceString += '</td><td class = ""></td></tr>';
	
	massiveReplaceString += "</table></td>";	
	
}

//end for loop



massiveReplaceString += "</tr></table></div></div><br /><br />";




massiveReplaceString += '<div id = "hideBoxBot"';

if (!variableIsSite)
	massiveReplaceString += ' style = "display: none;"';

massiveReplaceString += '><table><tr><td valign = "top" width = "350">';

//box top


massiveReplaceString += '<table  class="tal" border = "0" width = "100%" cellpadding = "0" cellspacing = "0"><tr><td></td><td></td><td></td></tr><tr><td><img src = "'+ pixelGif +'"></td><td style = "padding: 7;" bgcolor = "#000000" width = "350">';

massiveReplaceString += '<table width = "100%"><tr><td nowrap width = "50%"><span class = "mySmallWhite"><b>'+ textPointsLeft +'</b> <span id = "tabPointsAvailable" class = "mySmallWhite">'+ rankPoints +'</span><br><b>'+ textPointsSpent +'</b> <span id = "modifyRankPoints" class = "mySmallWhite">'+ eval(theRequiredLevel - 9) +'</span><br><b>'+ textLevelRequired +'</b> <span id = "levelRequired" class = "mySmallWhite">'+ theRequiredLevel +'</span></span></td>';

massiveReplaceString += '<td rowspan = "2">&nbsp;&nbsp;&nbsp;</td><td align = "right" valign = "bottom">';

massiveReplaceString += '<table border = "0" cellpadding = "0" cellspacing = "0">';

for (var jia = 0; jia < tree.length; jia++){
	massiveReplaceString += '<tr><td width = "50%"><nobr><span class = "mySmallWhite"><b>'+tree[jia]+'</b>'+ textColon +'</td><td align = "right">&nbsp;&nbsp;<span id="'+ tree[jia] +'PointsTopRight" class = "mySmallWhite">'+ pointsTree[jia] +'</span></span></nobr></td></tr>';
}

massiveReplaceString += "</table>";

massiveReplaceString += "</td></tr>";

massiveReplaceString += "</table>";



massiveReplaceString += '<img src = "'+ pixelGif +'" height = "10" width = "300">';

massiveReplaceString += '<table border = "0" cellpadding = "0" cellspacing = "0" width = "100%"><tr><td width = "80%"><a onClick = "printableVersion();" style="cursor:pointer"><img src="images/printableversion.gif"></td>';

massiveReplaceString += '<td><a href = #none onClick=resetTreeAll()><img src="images/resetall.gif"></td>';

massiveReplaceString += "</table>";

//box bottom
massiveReplaceString += '</td><td background = "'+ imgPath +'/includes/images/bot-box/right.gif"><img src = "'+ pixelGif +'"></td></tr>';
massiveReplaceString += '<tr><td><img src = ""></td><td background = "'+ imgPath +'/includes/images/bot-box/bot.gif"><img src = "'+ pixelGif +'"></td><td><img src = ""></td></tr></table>';

massiveReplaceString += '</td></tr><tr><td valign = "top">';

massiveReplaceString += "</td></tr>";

massiveReplaceString += "</table>";

massiveReplaceString += '<br><span style = "color: #ffffff;"><span style = "font-weight: bold;">'+ textToSave +'</span></span><br>';

massiveReplaceString += '<span style = "color:FFFFFF;">'+ theURLtoCopy +'?tal=<span id = "copyURL" style = "color:FFFFFF"></span></span><br></div>';



document.getElementById('replaceMeWithTalents').innerHTML = massiveReplaceString;

if (variableIsSite) {

canTurnGreen(0, 0, 1);
canTurnGreen(0, 1, 1);
canTurnGreen(0, 2, 1);

}

changeCopyURL();

jsLoaded=true;//needed for ajax script loading


