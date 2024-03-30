public class Question1 {

    public static void main(String[] args) {
        int[][] mat = {{1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}};

        rotateMatrix(mat);
    }

    static void rotateMatrix(int mat[][]) {
        for (int i = mat.length - 1; i >= 0; i--) {
            for (int j = mat[i].length - 1; j >= 0; j--) {
                System.out.print(mat[i][j] + " ");
            }
            System.out.println();
        }
    }
}
