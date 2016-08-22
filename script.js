var main =function () {
	var
	userArray = [],
	id = 1,
	numberOfElementsPerPage = 5,
	numberOfPages = 1,
	page = 1;
	function userClass(
		_names,
		_surname,
		_age,
		_famSurname,
		_street,
		_houseNumber,
		_code,
		_city,
		_dateOfBirth,
		_placeOfBirth,
		_pesel,
		_nip,
		_nameOfFather,
		_nameOfMother,
		_surnameOfMother,
		_gender,
		_idKind,
		_idIssuingAuthority,
		_numberOfId,
		_email,
		_telephone,
		_lvlOfEducation,
		_citizenship,
		_nationality) {
		this.names = _names
		this.surname = _surname;
		this.age = _age;
		this.famSurname = _famSurname;
		this.street = _street;
		this.houseNumber = _houseNumber;
		this.code = _code;
		this.city = _city;
		this.dateOfBirth = _dateOfBirth;
		this.placeOfBirth = _placeOfBirth;
		this.pesel = _pesel;
		this.nip = _nip;
		this.nameOfFather = _nameOfFather;
		this.nameOfMother = _nameOfMother;
		this.surnameOfMother = _surnameOfMother;
		this.gender = _gender;
		this.idKind = _idKind;
		this.idIssuingAuthority = _idIssuingAuthority;
		this.numberOfId = _numberOfId;
		this.email = _email;
		this.telephone = _telephone;
		this.lvlOfEducation = _lvlOfEducation;
		this.citizenship = _citizenship;
		this.nationality = _nationality;
		this.id = id++;
	}
	var addToList = function() {
		tempUserObject = new userClass(
			$('#names').val(),
			$('#surname').val(),
			parseInt($('#age').val()),
			$('#famSurname').val(),
			$('#street').val(),
			parseInt($('#houseNumber').val()),
			$('#code').val(),
			$('#city').val(),
			$('#dateOfBirth').val(),
			$('#placeOfBirth').val(),
			parseInt($('#pesel').val()),
			parseInt($('#nip').val()),
			$('#nameOfFather').val(),
			$('#nameOfMother').val(),
			$('#surnameOfMother').val(),
			$('#gender').val(),
			$('#idKind').val(),
			$('#idIssuingAuthority').val(),
			parseInt($('#numberOfId').val()),
			$('#email').val(),
			parseInt($('#telephone').val()),
			$('#lvlOfEducation').val(),
			$('#citizenship').val(),
			$('#nationality').val());
		userArray.unshift(tempUserObject);
		console.log(userArray);
		number_of_pages = Math.ceil(userArray.length/numberOfElementsPerPage);
		printList();
		clearInputs();
		
	};
	var clearInputs = function () {
		$('#names').val(''),
		$('#surname').val(''),
		$('#age').val(''),
		$('#famSurname').val(''),
		$('#street').val(''),
		$('#houseNumber').val(''),
		$('#code').val(''),
		$('#city').val(''),
		$('#dateOfBirth').val(''),
		$('#placeOfBirth').val(''),
		$('#pesel').val(''),
		$('#nip').val(''),
		$('#nameOfFather').val(''),
		$('#nameOfMother').val(''),
		$('#surnameOfMother').val(''),
		$('#gender').val(''),
		$('#idKind').val(''),
		$('#idIssuingAuthority').val(''),
		$('#numberOfId').val(''),
		$('#email').val(''),
		$('#telephone').val(''),
		$('#lvlOfEducation').val(''),
		$('#citizenship').val(''),
		$('#nationality').val('')
	};
	var printList = function () {
		$('#list_of_users').empty();
		//for (var i = (page-1)*numberOfElementsPerPage; i<page*numberOfElementsPerPage && i<history.length; i++) 

		userArray.forEach(function(user, i){
			if ( i>= (page-1)*numberOfElementsPerPage && i < page*numberOfElementsPerPage) {
				var removeButton = $('<button class="remove buttons" id="' + user.id + '">REMOVE</button>').click(function(){
					console.log(user);
					removeUser(user);
				})
				var upButton = $('<button class="up buttons" id= " ' + user.id + '">Up</button>').click(function(){
					console.log(user);
					moveUserUp(user);
				})
				var downButton = $('<button class="down buttons" id="' + user.id + '">Down</button>').click(function(){
					console.log(user);
					moveUserDown(user);
				})
				var showDetailsButton = $('<button class="details_button buttons" id="' + user.id +'">Show Details</button>').click(function() {
					console.log(user);
					showDetails(user);
				})
				$('#list_of_users')
				.append('<p>' + user.names + ' ' + user.surname + '</p>')
				.append(removeButton)
				.append(upButton)
				.append(downButton)
				.append(showDetailsButton)
			}
		})
		$('#page').text(page);
		$('#number_of_pages').text(number_of_pages);
	};
	var moveUserUp = function (user) {
		var b = userArray.indexOf(user);
		if (b-1 >= 0){
			var przenoszony = userArray[b];
			userArray[b] = userArray[b-1];
			userArray[b-1] = przenoszony;
			printList();
		};
	};
	var moveUserDown = function (user) {
		console.log('down ruszyla');
		var b = userArray.indexOf(user);
		if (b+1 < userArray.length) {
			var przenoszony = userArray[b];
			userArray[b] = userArray[b+1];
			userArray[b+1] = przenoszony;
			printList();
		};
	};
	var removeUser = function (user) {
		userArray.splice(userArray.indexOf(user),1);
		console.log(userArray);
		number_of_pages = Math.ceil(userArray.length/numberOfElementsPerPage);
		console.log(userArray.length, numberOfElementsPerPage);
		if (page > number_of_pages && number_of_pages >= 1 ) {
			page = number_of_pages;
		};
		if (number_of_pages === 0) {
			number_of_pages = 1;
		}
		console.log(page, number_of_pages);
		printList();
	};
	var showDetails = function (user) {
		$('#user_details').append(
			'<p><b>Names: </b>' + user.names + '</p>',
			'<p><b>Last Name: </b>' + user.surname + '</p>',
			'<p><b>Age: </b>' + user.age + '</p>',
			'<p><b>Gender: </b>' + user.gender + '</p>',
			'<p><b>Address: </b></p>',
			'<p><b>Street: </b>' + user.street + ' ' + user.houseNumber + '</p>',
			'<p><b>Postal code and City: </b>' + user.code +  ' ' + user.city + '</p>',
			'<p><b>Place and Date of Birth: </b>' + user.placeOfBirth + ' ' + user.dateOfBirth + '</p>',
			'<p><b>Nationality: </b>' + user.nationality + ' <b>Citizenship: </b>' + user.citizenship + '</p>',
			'<p><b>PESEL: </b>' + user.pesel + ' ' + '<b>NIP: </b>' + user.nip + '</p>',
			"<p><b>Mother's name: </b>" + user.nameOfMother + " <b>Mother's surname: </b>" + user.surnameOfMother + '</p>',
			"<p><b>Father's name: </b>" + user.nameOfFather + ' <b>famSurname: </b>' + user.famSurname + '</p>',
			'<p><b>ID information:</b></p>',
			'<p><b>Type of ID: </b>' + user.idKind + ' <b>ID Issuing Authority: </b>' + user.idIssuingAuthority + '</p>',
			'<p><b>Number of ID: </b>' + user.numberOfId + '</p>',
			'<p><b>Contact: </b></p>',
			'<p><b>E-mail: </b>' + user.email + '</p>',
			'<p><b>Telephone number: </b>' + user.telephone + '</p>',
			'<p><b>Level of education: </b>' + user.lvlOfEducation + '</p>'
			)
	}
	$('#first_page').click(function(){
		page = 1;
		printList();
	})

	$('#last_page').click(function(){
		page = number_of_pages;
		printList();
	})

	$('#next_page').click(function(){
		if (page < number_of_pages) {
			page++;
			printList();
		};
	})
	$('#previous_page').click(function(){
		if (page > 1 ) {
			page--;
			printList();
		};
	})
	$('#remove_whole_user_data').click(removeUser);
	$('#add_to_list').click(addToList);
	$('#print_list').click(printList);
}

$(document).ready(main);
