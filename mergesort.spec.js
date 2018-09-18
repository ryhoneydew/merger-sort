describe("Split Array function", function () {
    it("is able to split an array into two halves", function () {
        // your code here
        expect(split([1, 2, 3, 5, 8])).toEqual([
            [1, 2],
            [3, 5, 8]
        ]);
    });
    it("is able to split an array into two halves when there are two number in the array", function () {
        // your code here
        expect(split([6, 19])).toEqual([
            [6],
            [19]
        ]);
    });
});

describe('Merge function', function () {
    it('is able to merge two sorted arrays into one sorted array', function () {
        expect(merge([1, 2, 3], [5, 8])).toEqual([1, 2, 3, 5, 8]);
    });
    it('is able to merge two sorted arrays into one sorted array and one of the array is empty', function () {
        expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
    });
});

describe('Mergesort function', function () {
    // it('is able to merge and sort an array', function () {
    //     expect(merge([3, 4, 1, 9, 23, 2])).toEqual([1, 2, 3, 4, 9, 23]);
    // });
    it('is able to merge an array with duplicated numbers in it', function () {
        expect(merge([2, 7, 4, 2, 1, 3, 5])).toEqual([1, 2, 2, 3, 4, 5, 7]);
    });
});