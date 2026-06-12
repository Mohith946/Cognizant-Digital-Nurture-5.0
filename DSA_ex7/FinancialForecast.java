package DSA_ex7;

class FinancialForecast {
    public static double PredictValue(double current, double rate, int years) {
        if (years == 0) {
            return current;
        }
        return PredictValue(current * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 5;
        double futureValue = PredictValue(currentValue, growthRate, years);
        System.out.println("Current Value : " + currentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.printf("Future Value  : %.2f%n", futureValue);

    }
}
