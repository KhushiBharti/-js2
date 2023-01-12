var emp =
    [
        ["Ram", 23, "male", 45000],
        ["Laxman", 22, "male", 44000],
        ["Sita", 20, "female", 40000],
        ["Radha", 20, "female", 40000],
        ["Rukmani", 20, "female", 40000],
        ["Hanuman", 19, "male", 42000],
        ["Shyam", 23, "male", 45000]
    ];
document.write("<table border='3'bordercolor='blue'cellspacing='0'bgcolor='yellow'>")
for (var r = 0; r < 7; r++) 
{
    document.write("<tr>");
    for (var c = 0; c < 4; c++) {
        document.write("<td>" + emp[r][c] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");