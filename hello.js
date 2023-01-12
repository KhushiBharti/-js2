var marks=86;

switch (true) {
    case (marks>=80 && marks<=100) :
        document.write("You are first class.");
        break;
        case (marks>=60 && marks<=79) :
        document.write("You are second class.");
        break;
        case (marks>=40 && marks<=59) :
        document.write("You are third class.");
        break;
        case (marks>=30 && marks<=39) :
        document.write("You are Pass .");
        break;
    
    default:
        document.write("You are fail .");
        break;
}