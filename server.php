<?php 
    // imposto l'intestazione della risposta per indicare che il contenuto è JSON
    header('Content-type: application/json');

    // imposto la variabile in cui specifico il nome del file dove e contenuto l'array
    $file = 'data/todo-list.json';

    // leggo il contenuto del file json e lo restituisco

    echo file_get_contents($file);
?>