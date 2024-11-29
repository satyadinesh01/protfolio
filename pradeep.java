import java.util.*;
import java.util.Arrays;

public class pradeep{
    public static void main(String[] args){
        int [][] num = {
                            {0, 1},
                            {1, 0}
                        };
        int [][] target = {
                            {1, 0},
                            {0, 1}
                        }; 
        int n = num.length;
        int i = 0, j = n - 1, k = 0;
        while(i < n && j < n && k < n){
            num[i][k] = num[i][j];
            i++;
            j--;
            k++;
        }
        System.out.print(Arrays.toString(num));
    }
}