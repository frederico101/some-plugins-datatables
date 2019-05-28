<?php
declare(strict_types=1);

use Triad\Connection\DataBaseConnection;
use Triad\DataBase\DataBase;
use Triad\Net\Hook;
use Triad\Net\HTTP;
use Tsurt\Connection\PrintServerConnection;
use Tsurt\Connection\TsurtDataBaseConnection;

require_once $_SERVER['DOCUMENT_ROOT'] . '/lib.php';

$printDataBase = DataBase::connect(new PrintServerConnection(false));
$fabricaDataBase = DataBase::connect(new TsurtDataBaseConnection());

HTTP::GET(function () use($printDataBase, $fabricaDataBase)
{
	$result = [];
	$users = $fabricaDataBase->readAll('user');
	$rows = $printDataBase->readAll('queue');

	foreach ($rows as $row)
	{
		$row['print_user'] = $users[$row['user_id'] -1]['name'];
		$result[] = $row;
	}

	HTTP::responseOK(['data' => $result]);
});