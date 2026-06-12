package Design_ex2;

interface Document {
    void open();
}

class WordDocument implements Document {
    public void open() {
        System.out.println("Opening Word Document");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF Document");
    }
}

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening Excel Document");
    }
}

class DocumentFactory {
    public Document createDocument(String type) {
        if (type.equals("Word")) {
            return new WordDocument();
        } else if (type.equals("PDF")) {
            return new PdfDocument();
        } else if (type.equals("Excel")) {
            return new ExcelDocument();
        } else {
            throw new IllegalArgumentException("Invalid document type");
        }
    }
}

class FactoryMethodPatternExample {
    public static void main(String[] args) {
        DocumentFactory factory = new DocumentFactory();
        Document document = factory.createDocument("Word");
        document.open();
        document = factory.createDocument("PDF");
        document.open();
        document = factory.createDocument("Excel");
        document.open();
    }
}
