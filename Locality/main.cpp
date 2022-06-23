#include <iostream>

int** createMatrix(int size, int f) {
    int** matrix = new int* [size];
    for (int i = 0; i < size; ++i) {
        matrix[i] = new int[size];
        for (int j = 0; j < size; ++j) {
            if (f == 1) {
                matrix[i][j] = rand() % 10;
                std::cout << matrix[i][j] << "\t";
            }
            else {
                matrix[i][j] = { 0 };
            }
        }
        std::cout << std::endl;
    }

    return matrix;
}

void deleteMatrix(int** matrix, int size) {
    for (int i = 0; i < size; ++i) {
        delete[] matrix[i];
    }
    delete[] matrix;
    return;
}

int** multiplyMatrix(int** matrix1, int** matrix2, int** mul, int size) {
    int i, j, k, tmp;
    for (i = 0; i < size; ++i) {
        for (j = 0; j < size; ++j) {
            tmp = matrix1[i][j];
            for (k = 0; k < size; ++k) {
                mul[i][k] += tmp * matrix2[j][k];
            }
        }
    }

    return mul;
}

int main() {
    int** first = createMatrix(2, 1);
    int** second = createMatrix(2, 1);
    int** third = createMatrix(2, 0);
    int** multiply = multiplyMatrix(first, second, third, 2);

    for (int i = 0; i < 2; ++i) {
        for (int j = 0; j < 2; ++j) {
            std::cout << third[i][j] << " ";
        }
        std::cout << std::endl;
    }

    deleteMatrix(first, 2);
    deleteMatrix(second, 2);
    deleteMatrix(third, 2);

    return 0;
}