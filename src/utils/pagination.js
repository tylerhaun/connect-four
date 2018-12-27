
function applyConstraints(value, min, max) {
    var ret = value;
    if (ret < min) ret = min;
    if (ret > max) ret = max;
    return ret;
}

export function createPaginationParams(request, options) {
    options = options || {};
    Object.assign(options, {pageBoundaries: [0, Infinity], pageSizeBoundaries: [0, 50], defaultPage: 0, defaultPageSize: 50});

    var page = request.query.page;
    var pageSize = request.query.pageSize;

    const {defaultPage, defaultPageSize, pageBoundaries, pageSizeBoundaries} = options;

    page = (page != null ? page = page : defaultPage);
    pageSize = (pageSize != null ? pageSize : defaultPageSize)

    page = applyConstraints(page, pageBoundaries[0], pageBoundaries[1])
    pageSize = applyConstraints(pageSize, pageSizeBoundaries[0], pageSizeBoundaries[1])

    var limit = pageSize;
    var offset = page * pageSize;

    var paginationParams = {limit, offset};

    return paginationParams;
    
}
