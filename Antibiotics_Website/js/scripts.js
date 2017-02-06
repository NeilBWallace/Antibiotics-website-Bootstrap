

    function gup(name, url) {
        if (!url) url = location.href;
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        return results == null ? null : results[1];
    }

    function replace_string(k)
        {
        k = k.replace("Amoxicillin", "<font color ='red'>Amoxicillin</font>");
        k = k.replace("Clarithromycin", "<font color ='green'>Clarithromycin</font>");
        k = k.replace("Acetic acid", "<font color ='green'>Acetic acid</font>");
        k = k.replace("Flucloxacillin", "<font color ='red'>Flucloxacillin</font>");
        k = k.replace("Chloramphenicol", "<font color ='green'>Chloramphenicol</font>");
        k = k.replace("Flouroquinolone", "<font color ='green'>Flouroquinolone</font>");
        k = k.replace("Ciprofloxacin", "<font color ='green'>Ciprofloxacin</font>");
        k = k.replace("Ofloxacin", "<font color ='green'>Ofloxacin</font>");
        k = k.replace("Doxycycline", "<font color ='green'>Doxycycline</font>");
        k = k.replace("Co-amoxiclav", "<font color ='red'>Co-amoxiclav</font>");
        k = k.replace("Phenoxymethylpenicillin", "<font color ='red'>Phenoxymethylpenicillin</font>");
        k = k.replace("Benzylpenicillin", "<font color ='red'>Benzylpenicillin</font>");
        k = k.replace("Metronidazole", "<font color ='green'>Metronidazole</font>");
        k = k.replace("Nitrofurantoin", "<font color ='green'>Nitrofurantoin</font>");
        k = k.replace("Trimethoprim", "<font color ='green'>Trimethoprim</font>");
        k = k.replace("Pivmecillinam", "<font color ='red'>Pivmecillinam</font>");
        k = k.replace("Cefalexin", "<font color ='orange'>Cefalexin</font>");
        k = k.replace("Vancomycin", "<font color ='green'>Vancomycin</font>");
        k = k.replace("Fidaxomicin", "<font color ='green'>Fidaxomicin</font>");
        k = k.replace("Lansoprazole", "<font color ='green'>Lansoprazole</font>");
        k = k.replace("Tetracycline", "<font color ='green'>Tetracycline</font>");
        k = k.replace("Levofloxacin", "<font color ='green'>Levofloxacin</font>");
        k = k.replace("Mebendazole", "<font color ='green'>Mebendazole</font>");
        k = k.replace("Clotrimazole", "<font color ='green'>Clotrimazole</font>");
        k = k.replace("Fluconazole", "<font color ='green'>Fluconazole</font>");
        k = k.replace("Miconazole", "<font color ='green'>Miconazole</font>");
        k = k.replace("Clindamycin", "<font color ='green'>Clindamycin</font>");
        k = k.replace("Azithromycin", "<font color ='green'>Azithromycin</font>");
        k = k.replace("Ceftriaxone", "<font color ='orange'>Ceftriaxone</font>");
        k = k.replace("Cephalosporins", "<font color ='orange'>Cephalosporins</font>");
        k = k.replace("Quinolones", "<font color ='green'>Quinolones</font>");
        k = k.replace("Tinidazole", "<font color ='green'>Tinidazole</font>");
        k = k.replace("Adapaline", "<font color ='green'>Adapaline</font>");
        k = k.replace("Lymecycline", "<font color ='green'>Lymecycline</font>");
        k = k.replace("OxyTetracycline", "<font color ='green'>OxyTetracycline</font>");
        k = k.replace("Erythromycin", "<font color ='green'>Erythromycin</font>");
        k = k.replace("Tetracyclines", "<font color ='green'>Tetracyclines</font>");
        k = k.replace("Fusidic acid", "<font color ='green'>Fusidic acid</font>");
        k = k.replace("Amorolfine", "<font color ='green'>Amorolfine</font>");
        k = k.replace("Itraconazole", "<font color ='green'>Itraconazole</font>");
        k = k.replace("Terbinafine", "<font color ='green'>Terbinafine</font>");
        k = k.replace("Teicoplanin", "<font color ='green'>Teicoplanin</font>");
        k = k.replace("Penicillin V", "<font color ='red'>Penicillin V</font>");
        k = k.replace("Aciclovir", "<font color ='green'>Aciclovir</font>");
        k = k.replace("Famciclovir", "<font color ='green'>Famciclovir</font>");
        k = k.replace("ValAciclovir", "<font color ='green'>ValAciclovir</font>");


        return k;

        }
    function generate_table() {
      
        var d = retrieve_drugs();


        var url = location.href;
        var selected_drug = gup('id', url);
        var index = d.length;
        var k;

        // creating all cells


        var body = document.getElementsByTagName("body")[0];
       
        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        tbl.style.top = '260px';
       
          tbl.style.position = 'absolute';
        tbl.style.height = "60px";
        tbl.style.width = "100%";
        var tblBody = document.createElement("tbody");
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
       

      
      




        for (var j = 0; j < index; j++) {
            if (d[j].ID == selected_drug) {


                // creates a table row
                var row = document.createElement("tr");
                row.style.height = "30px";
                row.style.backgroundColor = '#7992bd';
                var cell = document.createElement("td");
                //  var cellText = document.createTextNode("Infection");
                cell.innerHTML = "&nbsp" + d[j].Infection;
                cell.style.color = "white";
                row.appendChild(cell);
                tblBody.appendChild(row);

                var roww = document.createElement("tr");
                roww.style.height = "10px";
                tblBody.appendChild(roww);





                var row1 = document.createElement("tr");
                row1.style.backgroundColor = '#bdd1f6';
                row1.style.height = "30px";
                var cell1 = document.createElement("td");
                cell1.innerHTML ='&nbsp' + 'First Line';
                cell1.style.color = "#1760ae";
                row1.appendChild(cell1);
                tblBody.appendChild(row1);

                var row1a = document.createElement("tr");
                var cell1a = document.createElement("td");
                var k = replace_string(d[j].FirstLine);
                cell1a.innerHTML = '&nbsp' + '&nbsp' + k;
                row1a.appendChild(cell1a);
                tblBody.appendChild(row1a);

                var row1b =document.createElement("tr");
                tblBody.appendChild(row1b);

                var row2 = document.createElement("tr");
                row2.style.backgroundColor = '#bdd1f6';
                var cell2 = document.createElement("td");
                cell2.innerHTML = '&nbsp' + 'Second Line';
                cell2.style.color = "#1760ae";
                row2.appendChild(cell2);
                row2.style.height = "30px";
                tblBody.appendChild(row2);

                var row2a = document.createElement("tr");
                var cell2a = document.createElement("td");
                var k = replace_string(d[j].SecondLine)
                cell2a.innerHTML = '&nbsp' + '&nbsp' + k;
                row2a.appendChild(cell2a);
                tblBody.appendChild(row2a);


                var row3 = document.createElement("tr");
                var cell3 = document.createElement("td");
                row3.style.backgroundColor = '#bdd1f6';
                cell3.innerHTML = '&nbsp' + 'Further Information';
                cell3.style.color = "#1760ae";
                row3.appendChild(cell3);
                tblBody.appendChild(row3);
                row3.style.height = "30px";

                var row3a = document.createElement("tr");
                var cell3a = document.createElement("td");
                row3a.style.height = "20px";



                var k = d[j].Comments;
                k = replace_string(k);














                cell3a.innerHTML = '&nbsp' + '&nbsp' + k;
                row3a.appendChild(cell3a);
                tblBody.appendChild(row3a);

                body.appendChild(tbl);
            };
        };

     //   var div = document.createElement("div");
      //  div.id = "TitleBG";
      //  var img = document.createElement("img");
      //  img.src="images/TitleBG.png";
      //   div.appendChild(img);
          
      //   div.InnerHTML = "Test";
      //   body.appendChild(div);

        
        
        


        
        if (1 == 3) {
            for (var j = 0; j < index; j++) {



                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row


                var cellText = document.createTextNode(k);
                if (d[j].Infection == selected_drug) {
                  
                    var row = document.createElement("tr");
                    var cell = document.createElement("td");
                    k = d[j].Infection;
                    var cellText = document.createTextNode(k);

                    cell.innerHTML = "<b>Infection:</b>";
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    tblBody.appendChild(div);
                    tblBody.appendChild(row);
                }

                var cellText = document.createTextNode(k);
                if (d[j].Infection == selected_drug) {
                    var row = document.createElement("tr");
                    var cell = document.createElement("td");
                    k = d[j].FirstLine;
                    var cellText = document.createTextNode(k);

                    cell.innerHTML = "<b>First Line:</b>";
                    cell.appendChild(cellText);
                    row.appendChild(cell);

                    tblBody.appendChild(row);
                }

                var cellText = document.createTextNode(k);
                if (d[j].Infection == selected_drug) {
                    var row = document.createElement("tr");
                    var cell = document.createElement("td");
                    k = d[j].SecondLine;
                    var cellText = document.createTextNode(k);

                    cell.innerHTML = "<b>Second Line:</b>";
                    cell.appendChild(cellText);
                    row.appendChild(cell);

                    tblBody.appendChild(row);

                }


                if (d[j].Infection == selected_drug) {
                    var row = document.createElement("tr");
                    var cell = document.createElement("td");
                    k = d[j].Comments;


                    k = k.replace.innerHTML = ("Amoxicillin", "<font color ='red'>Amoxicillin</font>");
                    k = k.replace("Clarithromycin", "<font color ='green'>Clarithromycin</font>");
                    k = k.replace("Acetic acid", "<font color ='green'>Acetic acid</font>");
                    k = k.replace("Flucloxacillin", "<font color ='red'>Flucloxacillin</font>");
                    k = k.replace("Chloramphenicol", "<font color ='green'>Chloramphenicol</font>");
                    k = k.replace("Flouroquinolone", "<font color ='green'>Flouroquinolone</font>");
                    k = k.replace("Ciprofloxacin", "<font color ='green'>Ciprofloxacin</font>");
                    k = k.replace("Ofloxacin", "<font color ='green'>Ofloxacin</font>");
                    k = k.replace("Doxycycline", "<font color ='green'>Doxycycline</font>");
                    k = k.replace("Co-amoxiclav", "<font color ='red'>Co-amoxiclav</font>");
                    k = k.replace("Phenoxymethylpenicillin", "<font color ='red'>Phenoxymethylpenicillin</font>");
                    k = k.replace("Benzylpenicillin", "<font color ='red'>Benzylpenicillin</font>");
                    k = k.replace("Metronidazole", "<font color ='green'>Metronidazole</font>");
                    k = k.replace("Nitrofurantoin", "<font color ='green'>Nitrofurantoin</font>");
                    k = k.replace("Trimethoprim", "<font color ='green'>Trimethoprim</font>");
                    k = k.replace("Pivmecillinam", "<font color ='red'>Pivmecillinam</font>");
                    k = k.replace("Cefalexin", "<font color ='orange'>Cefalexin</font>");
                    k = k.replace("Vancomycin", "<font color ='green'>Vancomycin</font>");
                    k = k.replace("FIdaxomicin", "<font color ='green'>FIdaxomicin</font>");
                    k = k.replace("Lansoprazole", "<font color ='green'>Lansoprazole</font>");
                    k = k.replace("Tetracycline", "<font color ='green'>Tetracycline</font>");
                    k = k.replace("Levofloxacin", "<font color ='green'>Levofloxacin</font>");
                    k = k.replace("Mebendazole", "<font color ='green'>Mebendazole</font>");
                    k = k.replace("Clotrimazole", "<font color ='green'>Clotrimazole</font>");
                    k = k.replace("Fluconazole", "<font color ='green'>Fluconazole</font>");
                    k = k.replace("Miconazole", "<font color ='green'>Miconazole</font>");
                    k = k.replace("Clindamycin", "<font color ='green'>Clindamycin</font>");
                    k = k.replace("Azithromycin", "<font color ='green'>Azithromycin</font>");
                    k = k.replace("Ceftriaxone", "<font color ='orange'>Ceftriaxone</font>");
                    k = k.replace("Cephalosporins", "<font color ='orange'>Cephalosporins</font>");
                    k = k.replace("Quinolones", "<font color ='green'>Quinolones</font>");
                    k = k.replace("Tinidazole", "<font color ='green'>Tinidazole</font>");
                    k = k.replace("Adapaline", "<font color ='green'>Adapaline</font>");
                    k = k.replace("Lymecycline", "<font color ='green'>Lymecycline</font>");
                    k = k.replace("OxyTetracycline", "<font color ='green'>OxyTetracycline</font>");
                    k = k.replace("Erythromycin", "<font color ='green'>Erythromycin</font>");
                    k = k.replace("Tetracyclines", "<font color ='green'>Tetracyclines</font>");
                    k = k.replace("Fusidic acid", "<font color ='green'>Fusidic acid</font>");
                    k = k.replace("Amorolfine", "<font color ='green'>Amorolfine</font>");
                    k = k.replace("Itraconazole", "<font color ='green'>Itraconazole</font>");
                    k = k.replace("Terbinafine", "<font color ='green'>Terbinafine</font>");
                    k = k.replace("Teicoplanin", "<font color ='green'>Teicoplanin</font>");
                    k = k.replace("Penicillin V", "<font color ='red'>Penicillin V</font>");
                    k = k.replace("Aciclovir", "<font color ='green'>Aciclovir</font>");
                    k = k.replace("Famciclovir", "<font color ='green'>Famciclovir</font>");
                    k = k.replace("ValAciclovir", "<font color ='green'>ValAciclovir</font>");






                    var cellText = document.createTextNode(k);
                    cell.innerHTML = "<b>Comments:</b>";
                    cell.appendChild(cellText);
                    row.appendChild(cell);

                    // add the row to the end of the table body
                    tblBody.appendChild(row);
                }



            }




            // put the <tbody> in the <table>
            tbl.appendChild(tblBody);
            // appends <table> into <body>
            body.appendChild(tbl);
            // sets the border attribute of tbl to 2;
            tbl.setAttribute("border", "2");
        }


    }

