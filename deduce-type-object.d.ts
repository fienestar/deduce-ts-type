declare const a: {
    version: string;
    logo: string;
    title: string;
    link: string;
    pubDate: string;
    totalResults: number;
    startIndex: number;
    itemsPerPage: number;
    query: string;
    searchCategoryId: number;
    searchCategoryName: string;
    item: ({
        title: string;
        link: string;
        author: string;
        pubDate: string;
        description: string;
        isbn: string;
        isbn13: string;
        itemId: number;
        priceSales: number;
        priceStandard: number;
        mallType: string;
        stockStatus: string;
        mileage: number;
        cover: string;
        categoryId: number;
        categoryName: string;
        publisher: string;
        salesPoint: number;
        adult: boolean;
        fixedPrice: boolean;
        customerReviewRank: number;
        seriesInfo: {
            seriesId: number;
            seriesLink: string;
            seriesName: string;
        };
        subInfo: {
            ebookList: {
                itemId: number;
                isbn: string;
                isbn13: string;
                priceSales: number;
                link: string;
            }[];
            usedList: {
                aladinUsed: {
                    itemCount: number;
                    minPrice: number;
                    link: string;
                };
                userUsed: {
                    itemCount: number;
                    minPrice: number;
                    link: string;
                };
                spaceUsed: {
                    itemCount: number;
                    minPrice: number;
                    link: string;
                };
            };
        };
    } | {
        title: string;
        link: string;
        author: string;
        pubDate: string;
        description: string;
        isbn: string;
        isbn13: string;
        itemId: number;
        priceSales: number;
        priceStandard: number;
        mallType: string;
        stockStatus: string;
        mileage: number;
        cover: string;
        categoryId: number;
        categoryName: string;
        publisher: string;
        salesPoint: number;
        adult: boolean;
        fixedPrice: boolean;
        customerReviewRank: number;
        subInfo: {
            ebookList: {
                itemId: number;
                isbn: string;
                isbn13: string;
                priceSales: number;
                link: string;
            }[];
            usedList: {
                aladinUsed: {
                    itemCount: number;
                    minPrice: number;
                    link: string;
                };
                userUsed: {
                    itemCount: number;
                    minPrice: number;
                    link: string;
                };
                spaceUsed: {
                    itemCount: number;
                    minPrice: number;
                    link: string;
                };
            };
        };
        seriesInfo?: undefined;
    })[];
};
