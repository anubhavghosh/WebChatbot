<!DOCTYPE html>
<html>
	<head>
		<title>Form</title>
		<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
	</head>
	<style type="text/css">
		* {
			padding: 5px;
			margin: 5px;
		}
		body {
			background-color: #2C3E50;
			color: white;
			padding: 10px;
		}
	</style>
	<body>
		<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

			<input type=hidden name="oid" value="00D0o0000018ZpQ">
			<input type=hidden name="retURL" value="https://snureception.herokuapp.com/slideShow.html">

			<!--  ----------------------------------------------------------------------  -->
			<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
			<!--  these lines if you wish to test in debug mode.                          -->
			<!--  <input type="hidden" name="debug" value=1>                              -->
			<!--  <input type="hidden" name="debugEmail" value="anubhav@gilabs.co.in">    -->
			<!--  ----------------------------------------------------------------------  -->

			<label for="salutation">Salutation</label><select  id="salutation" name="salutation"><option value="">--None--</option><option value="Mr.">Mr.</option>
			<option value="Ms.">Ms.</option>
			<option value="Mrs.">Mrs.</option>
			<option value="Dr.">Dr.</option>
			<option value="Prof.">Prof.</option>
			</select><br>

			<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br>

			<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br>

			<label for="mobile">Mobile</label><input  id="mobile" maxlength="40" name="mobile" size="20" type="text" /><br>

			<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br>

			<label for="description">Description</label><textarea name="description"></textarea><br>

			<label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" /><br>

			<input type="submit" name="submit">

		</form>
	</body>
</html>