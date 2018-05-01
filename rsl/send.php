<?
if((isset($_POST['firstname'])&&$_POST['firstname']!="")&&(isset($_POST['secondname'])&&$_POST['secondname']!="")&&(isset($_POST['lastname'])&&$_POST['lastname']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'morozova31@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Тестирование по английскому'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>First name: '.$_POST['firstname'].'</p>
                        <p>Second name: '.$_POST['secondname'].'</p>
                        <p>Last name: '.$_POST['lastname'].'</p>
                        <p>Home phone number: '.$_POST['homephone'].'</p>   
                        <p>Office phone number: '.$_POST['officephone'].'</p>
                        <p>Notes: '.$_POST['notes'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <morozova31@yandex.ru>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>