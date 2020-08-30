const searchFunc = () => {
  let input = document.getElementById("search-input").value.toUpperCase();
  let search_table = document.getElementById("search-table");
  let tr = search_table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    let td_name = tr[i].getElementsByTagName("td")[0];
    // td_name=> first td of tr
    if (td_name) {
      let name_text = td_name.textContent || td_name.innerHTML;
      if (name_text.toUpperCase().indexOf(input) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
