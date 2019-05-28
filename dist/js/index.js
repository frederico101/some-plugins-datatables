'use strict';
/**
 *
 * @type {{}}
 */
var
	locale = navigator.language,
	options =
	{
		stateSave:true,
		colReorder:true,
		//checkboxes:false,
		//filterFields:false,
		fixedHeader:true,
		language:
		{
			"sEmptyTable": "Nenhum registro encontrado",
			"sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
			"sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
			"sInfoFiltered": "(Filtrados de _MAX_ registros)",
			"sInfoPostFix": "",
			"sInfoThousands": ".",
			"sLengthMenu": "_MENU_ resultados por página",
			"sLoadingRecords": "Carregando...",
			"sProcessing": "Processando...",
			"sZeroRecords": "Nenhum registro encontrado",
			"sSearch": "Pesquisar",
			"oPaginate":
			{
				"sNext": "<span style='font-size: 25px; color: #999'>></span>",
				"sPrevious": "<span style='font-size: 25px; color: #999'><</span>",
				"sFirst": "<",
				"sLast": ">"
			},
			"oAria":
			{
				"sSortAscending": ": Ordenar colunas de forma ascendente",
				"sSortDescending": ": Ordenar colunas de forma descendente"
			}
		},
		columns:[]
		/*,
		lenghtMenu:
		[
			[10, 25, 50, 100, 250, 500 -1],
			['10', '25', '50', 100, 250, 500, 'Mostrar Todos']
		]*/
	},
	log = console.log,
	queryString = null,
	tableID = null,
	jsDistURL = '/table/dist/js/',
	jsSrcURL = '/table/src/js/',
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
		options.ajax =
		{
			type: "GET",
			url: '/table/api/' + tableID + '.php',
			data: function (d)
			{
				return d;
			}
		};
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
		/*var n = document.createElement('script');
		n.setAttribute('language', 'JavaScript');
		n.setAttribute('src', 'https://debug.datatables.net/debug.js');
		document.body.appendChild(n);*/

		var columns = [];

/*
		if($table.attr('data-checkboxes'))
		{
			columns.push({
				searchable: false,
				orderable: false,
				class: 'text-center',
				width: '1%',
				data: null,
				render: function (data, type, full, meta)
				{
					return '<div class="ui checkbox checkbox-primary"><input type="checkbox"><label></label></div><i style="font-size: 20px; display: none;" class="icon-circle-with-plus"></i>';
				}
			});
		}
*/
/*
		$table.find('thead .columns th').each(function (i, e)
		{

			var
				$target = $(e),
				columnType = $target.attr('data-type'),
				columnData =
				{
					data: null,
					render: function (data, type, full, meta)
					{
						return formatColumn($target.attr('data-content') || data[$target.attr('data-value')] || '', columnType, $target.attr('data-type-params').split(','));
					}
				};

			if(columnType === 'actions' || columnType === 'selection')
			{
				columnData.searchable = false;
				columnData.orderable = false;
				columnData.class = 'text-center';
			}

			options.columns.push(columnData);
		});

		//options.columns = columns;
*/
		options.columns =
		[
			{
				searchable: false,
				orderable: false,
				data: null,
				render: function (data, type, full, meta)
				{
					return '<div class="ui checkbox checkbox-primary"><input type="checkbox"><label></label></div><i style="font-size: 20px; display: none;" class="icon-circle-with-plus"></i>';
				}
			},
			{
				searchable: false,
				orderable: false,
				data: null,
				render: function (data, type, row)
				{
					return '<div class="tools"><button class="ui button basic" data-action="check"><i class="check icon"></i></button><button data-action="uncheck" class="ui button basic"><i class="times icon"></i></button><button data-action="print" class="ui button basic"><i class="print icon"></i></button></div>';
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return data.code;
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return data.image_code;
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return data.destiny_image;
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return data.date_time;
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return 'control';
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return data.queued;
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return data.printed;
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return 'print user';
				}
			},
			{
				"data": null,
				"render": function (data, type, row)
				{
					return 'check user';
				}
			},
		];
/*
		options.columns.unshift({
			searchable: false,
			orderable: false,
			data: null,
			render: function (data, type, full, meta)
			{
				return '<div class="ui checkbox checkbox-primary"><input type="checkbox"><label></label></div><i style="font-size: 20px; display: none;" class="icon-circle-with-plus"></i>';
			}
		});

		console.log('columns');
		console.log(columns);
		console.log('--------------------------------------------------');

 */
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
	formatColumn = function(value, type, typeParams)
	{
		var types =
		{
			'string':function ()
			{
				return value || '';
			},
			'boolean':function ()
			{
				return value ? '<i class="check icon"></i>' : '<i class="times icon"></i>';
			},
			'date':function ()
			{
				return moment(value).format(typeParams[0]);
			}
		};
		if(!types.hasOwnProperty(type)) return types['string']();
		return types[type || 'string']();
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
		queryString = $.url(window.location.href).param();
		tableID = queryString.id;
		$table = $('#' + tableID);

		//alert()

		setupAjax();
		setupColumns();

		table = $table.DataTable(options).on('page.dt', function ()
		{
			//var info = table.page.info();
			//log( 'Showing page: '+info.page+' of '+info.pages );
		});

		log(tableID + ' started');
		//log(options);
	},
	librariesLoadedHandler = function ()
	{
		$(document).ready(start);
	};
/**
 *
 */
//basket.clear();
basket.require
(
	{ url: jsDistURL + 'jquery/jquery-3.4.0.min.js' },
	{ url: jsDistURL + 'polyfill/history.min.js' },
	{ url: jsDistURL + 'polyfill/proxy.min.js' },
	{ url: jsDistURL + 'polyfill/promise.min.js' },
	{ url: jsDistURL + 'anime/anime.min.js' },
	{ url: jsDistURL + 'ramjet/ramjet.js' },
	{ url: jsDistURL + 'pathjs/path.min.js' },
	{ url: jsDistURL + 'purl/purl.js' },
	{ url: jsDistURL + 'moment/moment-with-locales.min.js' },
	{ url: jsDistURL + 'fomantic-ui-2.7/dist/semantic.min.js' },
	//{ url: jsDistURL + 'data-tables/js/jquery.dataTables.min.js' },
	{ url: jsSrcURL + 'data-tables/js/jquery.dataTables.js' },
	//{ url: jsDistURL + 'data-tables/js/dataTables.semanticui.min.js' },
	{ url: jsSrcURL + 'data-tables/js/dataTables.semanticui.js' },
	{ url: jsDistURL + 'data-tables/js/ext/col-reorder/js/dataTables.colReorder.min.js' },
	{ url: jsDistURL + 'data-tables/js/ext/fixed-header/js/dataTables.fixedHeader.min.js' },
).then(librariesLoadedHandler);