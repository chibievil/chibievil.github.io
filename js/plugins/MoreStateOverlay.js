//=============================================================================
// More state Overlay
// MoreStateOverlay.js
//=============================================================================

var Imported = Imported || {};
Imported.MoreStateOverlay = true;

var Hakuryo = Hakuryo || {};
Hakuryo.Core = Hakuryo.Core || {};

//=============================================================================
 /*:
 * @plugindesc v1.01 Adding the possibility to add new State overlay
 * @author Hakuryo
 *
 *
 * @help
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * The main goal of this plugin is to provide the possibility to add more state 
 * overlay than the default set.
 *
 * To add a new overlay put a new line in the State.png file located in 
 * YourGameFolder/img/sytem/
 * Then use <STATE OVERLAY: x> in the note of a state and replace the 'x' 
 * by the line number of your new overlay.
 *
 * Exemple : 
 * 
 * <STATE OVERLAY: 11>
 * 
 * this will choose the 11nth ligne of State.png
 *
 * ============================================================================
 * Tips & Tricks
 * ============================================================================
 * An animation ligne of the State.png file is made of 8 frame of 96x96 pixels
 * Be sure to respect the ligne format in order to make the plugin work.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Fixed a bug setting default state overlay to none.

 * Version 1.00:
 * - Plugin release.
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Hakuryo.Parameters = PluginManager.parameters('MoreStateOverlay');
Hakuryo.Param = Hakuryo.Param || {};

//Hakuryo.Param.toto = String(Hakuryo.Parameters['test']);

//=============================================================================
// DataManager
//=============================================================================

Hakuryo.Core.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (!Hakuryo.Core.DataManager_isDatabaseLoaded.call(this)) return false;
	DataManager.processCoreNotetags1($dataStates);
	return true;
};

DataManager.processCoreNotetags1 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);
		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<STATE OVERLAY: (\d+)>/i)) {
				obj.overlay = parseInt(RegExp.$1);
			}
		}
	}
};

//=============================================================================
// Plugin Code
//=============================================================================


//=============================================================================
// End of File
//=============================================================================