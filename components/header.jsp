<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!-- font awesome cdn link  -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<!-- custom css file link  -->
<link rel="stylesheet" href="/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
<!-- custom js file link  -->
<script src="/js/script.js" defer></script>
<link rel="stylesheet" href="/css/style.scss">
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script>
    AOS.init({
        duration: 800,
        offset:150,
    });
</script>
<style>
    @media (max-width: 767px) {
        .table-responsive . dropdown-menu {
            position: static !important;
        }
    }
    @media (min-width: 768px) {
        .table-responsive . dropdown-menu {
            overflow: inherit;
        }
    }
</style>
<header class="header">
    <div id="menu-btn" class="fas fa-bars"></div>
    <a data-aos="zoom-in-left" data-aos-delay="150" href="#" class="logo"><i class="fas fa-paper-plane"></i>CGym</a>
    <nav class="navbar">
        <a class="nav-link ${urlPath eq 'home' or empty urlPath  ? 'active' : ''}" data-aos="zoom-in-left" data-aos-delay="300" href="/index.jsp">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link ${urlPath eq 'home' or empty urlPath  ? 'active' : ''}" data-aos="zoom-in-left" data-aos-delay="300" href="/view/about/list.jsp">About <span class="sr-only">(current)</span></a>
        <a class="nav-link ${urlPath eq 'employee' ? 'active' : ''}" data-aos="zoom-in-left" data-aos-delay="450" href="/employees">Homestay</a>
<c:if test="${not empty sessionScope.roleSession}">
        <a class="nav-link ${urlPath eq 'Booking' ? 'active' : ''}" data-aos="zoom-in-left" data-aos-delay="600" href="/bookeds?action=all">Booking</a>
</c:if>
        <c:if test="${empty sessionScope.roleSession}">
            <a class="nav-link ${urlPath eq 'Booking' ? 'active' : ''}" data-aos="zoom-in-left" data-aos-delay="600" href="/bookeds">Booking</a>
        </c:if>
        <a class="nav-link ${urlPath eq 'house' ? 'active' : ''}" data-aos="zoom-in-left" data-aos-delay="750" href="/houses">House</a>
        <c:if test="${not empty sessionScope.roleSession}">
        <a class="nav-link ${urlPath eq 'management' ? 'active' : ''}" data-aos="zoom-in-left" data-aos-delay="900" href="/manages">Management</a>
        </c:if>
    </nav>
    <div class="form-inline my-2 my-lg-0">
        <c:if test="${empty sessionScope.usernameSession}">
            <form action="/login" method="post">
                <input type="hidden" name="action" value="login">
                <button type="submit" class="btn btn-outline-success">Login</button>
            </form>
        </c:if>
        <style>
            .btn {
                outline: none !important;
            }
        </style>
        <c:if test="${not empty sessionScope.usernameSession}">
            <form class="form-inline" action="/login">
                <div class="form-group mb-2">
                    <a id="btn-outline" class="btn btn-outline-info" href="/view/user/detail.jsp"> ${sessionScope.usernameSession}
                        <span class="sr-only">(current)</span>
                    </a>
                    <button type="submit" class="btn btn-outline-info">Logout</button>
                    <input type="hidden" name="action" value="logout">
                </div>
            </form>
        </c:if>
    </div>

</header>

