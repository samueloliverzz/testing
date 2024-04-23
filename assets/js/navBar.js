$(document).ready(function() {
    $('#menu').html(`
        <ul>
            <li><a href="index.html">Home</a></li>
            <ul class="dropdown">
                <li class="dropbtn">About</li>
                <ul class="dropdown-content scroll">
                    <li><a href="conservation.html">Conservation & Sustainability</a></li>
                    <li><a href="articles.html">Paper & Articles</a></li>
                    <li><a href="projects.html">Projects</a></li>
                </ul>
            </ul>
            <ul class="dropdown">
                <li class="dropbtn">Board Of Directors </li>
                <ul class="dropdown-content scroll">
                    <li><a href="eric.html">President</a></li>
                    <li><a href="secretary.html">Secretary</a></li>
                    <li><a href="president.html">Board Member</a></li>
                    <li><a href="whiteEagle.html">Board Member</a></li>
                    <li><a href="spiritualAdvisor.html">Board Member</a></li>
                    <li><a href="crus.html">Board Member</a></li>
                    <li><a href="nacLeader1.html">NAC Leader</a></li>
                    <li><a href="nacLeader.html">NAC Leader</a></li>
                </ul>
            </ul>
            <li><a href="staff.html">Staff</a></li>
            <li><a href="volunteer.html">Volunteer</a></li>
            <li><a href="fundraiser.html">Fundraising</a></li>
            <ul class="dropdown">
                <li class="dropbtn">Stores</li>
                <ul class="dropdown-content scroll">
                    <li><a href="https://www.redbubble.com/people/ThePeyoteLorax/shop" target="_blank">Redbubble</a></li>
                    <li><a href="https://studiopeyotl.etsy.com" target="_blank">Etsy</a></li>
                </ul>
            </ul>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <!-- <img src="images/eaglenobackgroundSmall.png" alt="eagle"> -->
        <form action="https://www.paypal.com/donate" method="post" target="_top"
            class="zoom navDonate">
            <input type="hidden" name="hosted_button_id" value="RSX388RDPTVYG" />
            <input type="image" src="images/eaglenobackgroundSmall.png" border="0" name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button" />
            <img alt="Donate Button" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1"
                height="1" />
            <span class="donate">Click To Donate</span>
        </form>
    `);
});