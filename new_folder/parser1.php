<?php
 require ('phpQuery-onefile.php');
  
 $hbr = 
file_get_contents('http://%username%.habrahabr.ru/blog/');
  
 $document = phpQuery::newDocument($hbr);
  
 $hentry = $document->find('div.hentry');
  
 foreach ($hentry as $el) {
 $pq = pq($el); // Это аналог $ в jQuery
 // меняем атрибуты найденого элемента 
 $pq->find('h2.entry-title > a.blog')->attr('href',
 'http://%username%.habrahabr.ru/blog/')->html('%username%');
 $pq->find('div.entry-info')->remove();//удаляем ненужный эл-нт
 $tags = $pq->find('ul.tags > li > a');
 $tags->append(': ')->prepend(' :'); // добавляем : по бокам
 // добавляем контент в начало найденого элемента
 $pq->find('div.content')->prepend('<br />')->prepend($tags); 
 }
  
 echo $hentry;
?>