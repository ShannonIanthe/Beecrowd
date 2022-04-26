#include <stdio.h>

int main() {
    char name[8] = {
        'S',
        'h',
        'a',
        'n',
        'n',
        'o',
        'n',
        '\0'
    };
    for (int i = 0; i < 8; i++) {
        printf("%c", name[i]);
    }
    printf("\n");
    return 0;
}