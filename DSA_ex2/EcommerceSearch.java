package DSA_ex2;

public class EcommerceSearch {

    static class Product {
        int productId;
        String productName;
        String category;

        Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        @Override
        public String toString() {
            return "ID: " + productId +
                    ", Name: " + productName +
                    ", Category: " + category;
        }
    }

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        // Sorted array for Binary Search
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Travel")
        };

        int targetId = 104;

        Product linearResult = linearSearch(products, targetId);
        if (linearResult != null) {
            System.out.println("Linear Search Found:");
            System.out.println(linearResult);
        } else {
            System.out.println("Product Not Found");
        }
        System.out.println();

        Product binaryResult = binarySearch(products, targetId);
        if (binaryResult != null) {
            System.out.println("Binary Search Found:");
            System.out.println(binaryResult);
        } else {
            System.out.println("Product Not Found");
        }
    }
}