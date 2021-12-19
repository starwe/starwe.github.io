var changecode = function(code) {
    return (
        code
        .replaceAll("\n", "")
        .replaceAll("//--//", "<")
        .replaceAll("\\\\--\\\\", ">")
        .replaceAll("$%%-%%$01", "a")
        .replaceAll("$%%-%%$02", "b")
        .replaceAll("$%%-%%$03", "c")
        .replaceAll("$%%-%%$04", "d")
        .replaceAll("$%%-%%$05", "e")
        .replaceAll("$%%-%%$06", "f")
        .replaceAll("$%%-%%$07", "g")
        .replaceAll("$%%-%%$08", "h")
        .replaceAll("$%%-%%$09", "i")
        .replaceAll("$%%-%%$10", "j")
        .replaceAll("$%%-%%$11", "k")
        .replaceAll("$%%-%%$12", "l")
        .replaceAll("$%%-%%$13", "m")
        .replaceAll("$%%-%%$14", "n")
        .replaceAll("$%%-%%$15", "o")
        .replaceAll("$%%-%%$16", "p")
        .replaceAll("$%%-%%$17", "q")
        .replaceAll("$%%-%%$18", "r")
        .replaceAll("$%%-%%$19", "s")
        .replaceAll("$%%-%%$20", "t")
        .replaceAll("$%%-%%$21", "u")
        .replaceAll("$%%-%%$22", "v")
        .replaceAll("$%%-%%$23", "w")
        .replaceAll("$%%-%%$24", "x")
        .replaceAll("$%%-%%$25", "y")
        .replaceAll("$%%-%%$26", "z")
        .replaceAll("$%%-%%$001", "A")
        .replaceAll("$%%-%%$002", "B")
        .replaceAll("$%%-%%$003", "C")
        .replaceAll("$%%-%%$004", "D")
        .replaceAll("$%%-%%$005", "E")
        .replaceAll("$%%-%%$006", "F")
        .replaceAll("$%%-%%$007", "G")
        .replaceAll("$%%-%%$008", "H")
        .replaceAll("$%%-%%$009", "I")
        .replaceAll("$%%-%%$010", "J")
        .replaceAll("$%%-%%$011", "K")
        .replaceAll("$%%-%%$012", "L")
        .replaceAll("$%%-%%$013", "M")
        .replaceAll("$%%-%%$014", "N")
        .replaceAll("$%%-%%$015", "O")
        .replaceAll("$%%-%%$016", "P")
        .replaceAll("$%%-%%$017", "Q")
        .replaceAll("$%%-%%$018", "R")
        .replaceAll("$%%-%%$019", "S")
        .replaceAll("$%%-%%$020", "T")
        .replaceAll("$%%-%%$021", "U")
        .replaceAll("$%%-%%$022", "V")
        .replaceAll("$%%-%%$023", "W")
        .replaceAll("$%%-%%$024", "X")
        .replaceAll("$%%-%%$025", "Y")
        .replaceAll("$%%-%%$026", "Z")
    )
}

function gcode(code) {
    return (
        code
        .replaceAll("\n", "")
        .replaceAll("<", "//--//")
        .replaceAll(">", "\\\\--\\\\")
        .replaceAll("a", "$%%-%%$01")
        .replaceAll("b", "$%%-%%$02")
        .replaceAll("c", "$%%-%%$03")
        .replaceAll("d", "$%%-%%$04")
        .replaceAll("e", "$%%-%%$05")
        .replaceAll("f", "$%%-%%$06")
        .replaceAll("g", "$%%-%%$07")
        .replaceAll("h", "$%%-%%$08")
        .replaceAll("i", "$%%-%%$09")
        .replaceAll("j", "$%%-%%$10")
        .replaceAll("k", "$%%-%%$11")
        .replaceAll("l", "$%%-%%$12")
        .replaceAll("m", "$%%-%%$13")
        .replaceAll("n", "$%%-%%$14")
        .replaceAll("o", "$%%-%%$15")
        .replaceAll("p", "$%%-%%$16")
        .replaceAll("q", "$%%-%%$17")
        .replaceAll("r", "$%%-%%$18")
        .replaceAll("s", "$%%-%%$19")
        .replaceAll("t", "$%%-%%$20")
        .replaceAll("u", "$%%-%%$21")
        .replaceAll("v", "$%%-%%$22")
        .replaceAll("w", "$%%-%%$23")
        .replaceAll("x", "$%%-%%$24")
        .replaceAll("y", "$%%-%%$25")
        .replaceAll("z", "$%%-%%$26")
        .replaceAll("A", "$%%-%%$001")
        .replaceAll("B", "$%%-%%$002")
        .replaceAll("C", "$%%-%%$003")
        .replaceAll("D", "$%%-%%$004")
        .replaceAll("E", "$%%-%%$005")
        .replaceAll("F", "$%%-%%$006")
        .replaceAll("G", "$%%-%%$007")
        .replaceAll("H", "$%%-%%$008")
        .replaceAll("I", "$%%-%%$009")
        .replaceAll("J", "$%%-%%$010")
        .replaceAll("K", "$%%-%%$011")
        .replaceAll("L", "$%%-%%$012")
        .replaceAll("M", "$%%-%%$013")
        .replaceAll("N", "$%%-%%$014")
        .replaceAll("O", "$%%-%%$015")
        .replaceAll("P", "$%%-%%$016")
        .replaceAll("Q", "$%%-%%$017")
        .replaceAll("R", "$%%-%%$018")
        .replaceAll("S", "$%%-%%$019")
        .replaceAll("T", "$%%-%%$020")
        .replaceAll("U", "$%%-%%$021")
        .replaceAll("V", "$%%-%%$022")
        .replaceAll("W", "$%%-%%$023")
        .replaceAll("X", "$%%-%%$024")
        .replaceAll("Y", "$%%-%%$025")
        .replaceAll("Z", "$%%-%%$026")
    )
}