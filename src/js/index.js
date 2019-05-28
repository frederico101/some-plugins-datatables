'use strict';
/**
 *
 * @type {{}}
 */
var
options = {},
log = console.log,
jsURL = '/triad/dist/js/',
$table = null,
table = null,
/**
 *
 */
setupFilterInputs = function ()
{

},
/**
 *
 */
setupColumnsVisibilityButtons = function ()
{

},
/**
 *
 */
setupMassActionsDropDown = function ()
{

},
/**
 *
 */
setupSearchInput = function ()
{

},
/**
 *
 */
setupRecordsPerPageDropDown = function ()
{

},
setupGroup = function ()
{

},
setupHead = function ()
{

},
/**
 *
 */
setupFixedHeader = function ()
{

},
/**
 *
 */
setupAjax = function ()
{

},
/**
 *
 */
setupNotification = function ()
{

},
/**
 *
 */
setupLoader = function ()
{

},
setupActionButtons = function ()
{

},
/**
 *
 */
setupSelectionCheckBoxes = function ()
{

},
/**
 *
 */
setupRows = function ()
{

},
/**
 *
 */
setupColumns = function ()
{

},
/**
 *
 */
setupLanguage = function ()
{

},
/**
 *
 */
setupExtensions = function ()
{

},
/**
 *
 */
setupCreateForm = function ()
{

},
/**
 *
 */
setupUpdateForm = function ()
{

},
/**
 *
 */
setupRest = function ()
{

},
/**
 *
 */
getTableHTML = function ()
{
	//dynamic-table/#options/tableId/
},
ajaxCreate = function ()
{

},
ajaxread = function ()
{

},
ajaxupdate = function ()
{

},
ajaxdelete = function ()
{

},
/**
 *
 */
start = function ()
{
//ajax dynamic-table/#read/tableId/
	log($.url(window.location.href).param().id)
	$table = $('#table');
	table = $table.DataTable(options);
	log('start');
},
librariesLoadedHandler = function ()
{
	$(document).ready(start);
};
/**
 *
 */
basket.require
(
	{ url: jsURL + 'jquery/jquery-3.4.0.min.js' },
	{ url: jsURL + 'anime/anime.min.js' },
	{ url: jsURL + 'ramjet/ramjet.js' },
	{ url: jsURL + 'fomantic-ui-2.7/dist/semantic.min.js' },
	{ url: jsURL + 'polyfill/history.min.js' },
	{ url: jsURL + 'polyfill/proxy.min.js' },
	{ url: jsURL + 'polyfill/promise.min.js' },
	{ url: jsURL + 'pathjs/path.min.js' },
	{ url: jsURL + 'data-tables/js/jquery.dataTables.min.js' },
	{ url: jsURL + 'data-tables/js/dataTables.semanticui.min.js' },
	{ url: jsURL + 'purl/purl.js' }
).then(librariesLoadedHandler);