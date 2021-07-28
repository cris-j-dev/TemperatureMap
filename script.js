// $(".close").click(function(){
//     console.log("close");
//     // $('.outside').toggleClass('in');
//     // $('.bar').toggleClass('active');
//     // $(this).toggleClass('is-showing');
// });

function drawMarker(i){

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 24); 
    
    // 마커 이미지를 생성합니다    
    if (i.number == 0){
        var markerImage = new kakao.maps.MarkerImage(imageSrc_00, imageSize_00, imageSize_00); 
    }
    else if (i.number >= 1 && i.number < 5){
        var markerImage = new kakao.maps.MarkerImage(imageSrc_01, imageSize_01, imageSize_01); 
    }
    else if (i.number >= 5 && i.number < 10){
        var markerImage = new kakao.maps.MarkerImage(imageSrc_02, imageSize_02, imageSize_02); 
    }
    else if (i.number >= 10 && i.number < 50){
        var markerImage = new kakao.maps.MarkerImage(imageSrc_03, imageSize_03, imageSize_03); 
    }
    else if (i.number >= 50 && i.number < 100){
        var markerImage = new kakao.maps.MarkerImage(imageSrc_04, imageSize_04, imageSize_04); 
    }
    else if (i.number >= 100){
        var markerImage = new kakao.maps.MarkerImage(imageSrc_05, imageSize_05, imageSize_05); 
    }
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(i.lat, i.lng), // 마커를 표시할 위치
        title : i.number, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });

    var row = `<tr>
                    <td>${i.index}</td>
                    <td>${i.lat}, ${i.lng}</td>
                    <td>${i.number}</td>
                </tr>`
    // table.innerHTML += row

    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
    // var iwContent = '<div style="padding:5px;">Hello World!</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var iwContent = `<div style="padding:5px;">${i.index}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        zindex:1
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        geocoder.coord2Address(i.lng, i.lat, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var detailAddr = !!result[0].road_address ? '<div>도로명 주소 : ' + result[0].road_address.address_name + '</div>' : '';
                detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                
                var content = '<div class="bAddr">' +
                                '<span class="title">주소정보</span>' + 
                                detailAddr + 
                            '</div>';
                                        // 마커를 클릭한 위치에 표시합니다 
                // marker.setPosition(mouseEvent.latLng);
                // marker.setMap(map);

                // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                infowindow.setContent(content);
                infowindow.open(map, marker);
            }   
        }); 
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'mouseout', function() {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
    });

}

function searchAddrFromCoords(coords, callback) {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
}

function searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}


$("#close").on("click", function(){

console.log("Test");
});