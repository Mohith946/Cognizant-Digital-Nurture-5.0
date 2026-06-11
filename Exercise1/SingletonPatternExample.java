package Exercise1;

class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("Logger object is created");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String msg) {
        System.out.println(msg);
    }
}

public class SingletonPatternExample {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Started");
        Logger logger2 = Logger.getInstance();
        logger2.log("User logged In");
        System.out.println(logger1 == logger2);
    }
}
