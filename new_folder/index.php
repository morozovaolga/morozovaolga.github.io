<?php
   require_once 'simple_html_dom.php';
//скачали страничку
$page = file_get_html('http://priut-ks.ru');
//проверка нашли ли хотя бы 1 блок img и не пустая ли страница
if($page->innertext!='' and count($data->find('img'))){
  //для всех элементов найдём элементы img
  foreach($data->find('img') as $img){
    //выведем данный элемент
    echo $a->innertext;
  }
} 
?>
