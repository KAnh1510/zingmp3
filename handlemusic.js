// open/close sidebarRight
	let sidebarRight = document.querySelector(".sidebar__right");
	let btnMenu = document.querySelector('.btn__menu');	
btnMenu.onclick = function() {
	sidebarRight.classList.toggle('active');
	btnMenu.classList.toggle('active');
}

// Header
let header = document.querySelector('.header');
let center = document.querySelector('.center');
let formSearch = document.querySelector('.form__search');
let formSearchItem = document.querySelector('.form__search-history');
let iconSearch = document.querySelectorAll('.ti-search')[0];
let formSearchHistory = document.querySelector('.form__search-history')
let main = document.querySelector('.main');
center.addEventListener('scroll', () => {
	return center.scrollTop > 0 ? header.classList.add('active') : header.classList.remove('active')
});
formSearch.addEventListener('click', function(e) {
	formSearch.classList.add('active');
	e.stopPropagation()
})

formSearchHistory.addEventListener('click', function(e) {
	e.stopPropagation()
})
function removeHistory() {
	formSearch.classList.remove('active');
}
main.onclick = function() {removeHistory()};
formSearchItem.onclick = function() {removeHistory()};
iconSearch.onclick = function() {removeHistory()};


//play music

const PLAYER_STORAGE_KEY = "ZING MP3";

const contentListSuggest = document.querySelector('.content__list-suggest');
const cdThumb = document.querySelector('.cd-thumb');
const heading = document.querySelector('.play__now-info-text h4 a');
const subheading = document.querySelector('.play__now-info-text h3 a');
const playBtn = document.querySelector('.btn__footer-play');
const nextBtn = document.querySelector('.btn__footer-next');
const prevBtn = document.querySelector('.btn__footer-pre');
const random = document.querySelector('.btn__footer-random i');
const repeat = document.querySelector('.btn__footer-return i');
const audio = document.getElementById('audio');
const playNowCenter = document.querySelector('.play__now-control-list');
const progress = document.querySelector('#progress');
const durationSong = document.querySelector('.duration__song');
const currentTime = document.querySelector('.current__time-song');
const contentNow = document.querySelector('.content__play-avt-img');
const contentNowTitle = document.querySelector('.content__play-title h4 a');
const contentNowsubTitle = document.querySelector('.content__play-title h3 a');
const progressVolume = document.querySelector('.progress__volume');
const volumeOffOnElement = document.querySelector('.btn__volume ');

const app = {
	currentIndex: 0,
	currentVolume:1,
	isPlaying: false,
	isRandom: false,
	isRepeat: false,
	isOnMouseAndTouchOnProgress: false,
	config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
	songs: [
		{
				name:"Độ Tộc 2",
				singer: "Độ Mixi,Pháo,Phúc Du,Masew",
				path:"music/Do-Toc-2-Do-Mixi-Phao-Phuc-Du-Masew.mp3",
				image:"https://oneesports.blob.core.windows.net/cdn-data/sites/4/2021/08/do-toc-21-450x251.png"
		},
		{
				name:"có hẹn với thanh xuân",
				singer: "Monstar",
				path:"music/co-hen-voi-thanh-xuan-MONSTAR.mp3",
				image:"https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/photo-1-16266149790192082922515.jpg"
		},
		{
				name:"Buồn của anh",
				singer: "ĐạtG,K-ICM, Masew",
				path:"music/Buon-Cua-Anh-K-ICM-Dat-G-Masew.mp3",
				image:"https://lamhoangmedia.com/wp-content/uploads/2020/11/loi-bai-hat-buon-cua-anh.jpg"
		},
		{
				name:"Lớn rồi",
				singer: "DSK",
				path:"music/Lon-Roi-DSK.mp3",
				image:"https://vtv1.mediacdn.vn/thumb_w/650/2019/1/6/artworks-000137859910-1x644i-t500x500-15467894257751765948346-crop-15467894417571813568454.jpg"
		},
		{
				name:"Say Em",
				singer: "QNT, Refund Band",
				path:"music/SayEm-QNTRefundBand-6791643.mp3",
				image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/d/d/4/6dd4c19f147f79a3971e49e6d54f123a.jpg"
		},
		{
				name:"Bật Nhạc Lên ",
				singer: "HieuThuHai, Harmonie",
				path:"music/BatNhacLen1-HIEUTHUHAIHarmonie-6351919.mp3",
				image:"https://i1.sndcdn.com/artworks-RIeWY8PZ8isQHTRM-WMoJWg-t500x500.jpg"
		},
		{
				name:"Ái Nộ",
				singer: "Masew,Khôi Vũ+",
				path:"music/AiNo1-MasewKhoiVu-7078913.mp3",
				image:"https://o.vdoc.vn/data/image/2021/08/31/loi-bai-hat-ai-no-so-1.jpg"
		},
		{
				name:"Yêu Từ Đâu Mà Ra",
				singer: "Lil Z",
				path:"music/YeuTuDauMaRaOrinnRemix-LilZpoet-6266627.mp3",
				image:"https://i1.sndcdn.com/artworks-jlrauBd8C9GZRtGy-NbI3pQ-t500x500.jpg"
		},
		{
			name:"có hẹn với thanh xuân",
			singer: "Monstar",
			path:"music/co-hen-voi-thanh-xuan-MONSTAR.mp3",
			image:"https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/photo-1-16266149790192082922515.jpg"
	},
	],
	setConfig: function(key,value) {
		this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY,JSON.stringify(this.config));
	},
	render: function() {
		const htmls = this.songs.map((song,index) => {
			return `<div class="suggest__item ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
			<div class="content__play-info">
				<div class="content__play-avt">
					<img src="${song.image}" alt="" class="content__play-avt-img">
					<div class="play__icon">
						<i class="fas fa-play"></i>
					</div>
					<div class="avt__cover"></div>
				</div>
				<div class="content__play-title">
					<h4 class="title">
						<a href="#" class="title__link">${song.name}</a>
					</h4>
					<h3 class="subtitle">
						<a class="subtitle__link" href="#"> ${song.singer}</a>
					</h3>
				</div>
			</div>
			<div class="content__play-icon">
				<div class="play__icon-item ">
					<div class="sub__heart">
						<span>Thêm vào danh sách phát</span>
					</div>
					<ion-icon name="play-outline" class="play-outline"></ion-icon>
				</div>
				<div class="play__icon-item">
					<div class="sub__more ">
						<span>Khác</span>
					</div>
					<i class="ti-more-alt icon__more" style="font-size:1.2rem;"></i>
				</div>
			</div>
		</div>`
		})
		contentListSuggest.innerHTML = htmls.join("");
	},
	defineProperties: function() {
		Object.defineProperty(this, 'currentSong', {
			get: function() {
				return this.songs[this.currentIndex];
			}
		})
	},
	handleEvents: function(){
		const _this = this;

		//xử lý CD quay/ dừng
		const cdThumbAnimate = cdThumb.animate([
			{
				transform: 'rotate(360deg)'
			}
			],{
					duration: 10000,
					interations: Infinity 
			})
			cdThumbAnimate.pause();

			audio.ontimeupdate = function() {
				if(audio.duration) {
					const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
					progress.value = progressPercent
				}
				let currentMin = Math.floor(audio.currentTime / 60);
				let currentSec = Math.floor(audio.currentTime % 60);
				if(currentSec < 10) {
					currentSec = `0${currentSec}`;
				}
				currentTime.innerText = `${currentMin}:${currentSec}`;
			}
		//Khi chạm chuột
		progress.onmousedown = function() {
			_this.isOnMouseAndTouchOnProgress = true;
		}
		//Khi hover
		progress.ontouchstart = function() {
			_this.isOnMouseAndTouchOnProgress = true;
		}
		// Tua
		progress.oninput = function(e) {
			if(audio.duration) {
				const seakTime = audio.duration / 100 * e.target.value
				audio.currentTime = seakTime
				_this.isOnMouseAndTouchOnProgress = false
			}
		}

		//xử lý khi tua
		progress.onchange = function(e) {
			const seekTime = audio.duration/100 * e.target.value;
      audio.currentTime = seekTime;
		}

		// xử lý khi click play object
		playBtn.onclick = function() {
			if(_this.isPlaying) {
				audio.pause()
			} else {
				audio.play()
			}
			// khi song được play
			audio.onplay = function() {
				_this.isPlaying = true;
				playNowCenter.classList.add('playing');
				cdThumbAnimate.play();
			}
			//khi pause
			audio.onpause = function() {
				_this.isPlaying = false;
				playNowCenter.classList.remove('playing');
				cdThumbAnimate.pause();
			}
		}

		//Xử lý khi next bài 
		nextBtn.onclick = function() {
			if(_this.isRandom) {
				_this.playRandomSong();
			}
			else {
				_this.nextSong();
			}
			audio.play();
			playNowCenter.classList.add('playing');
			cdThumbAnimate.play();
			_this.render();
			// _this.scrollToActiveSong();
		}

		// pre Song
		prevBtn.onclick = function() {
			if(_this.isRandom) {
				_this.playRandomSong();
			}
			else {
				_this.prevSong();
			}
			audio.play();
			_this.render();
			// _this.scrollToActiveSong();
			playNowCenter.classList.add('playing');
			cdThumbAnimate.play();
		}

		// Random song
		random.onclick = function() {
			_this.isRandom = !_this.isRandom;
			_this.setConfig('isRandom',_this.isRandom);
			random.classList.toggle("active", _this.isRandom);
			_this.repeat.classList.remove("active",_this.isRepeat);
		}
		// repeat song
		repeat.onclick = function(e){
			_this.isRepeat = !_this.isRepeat;
			_this.setConfig('isRepeat',_this.isRepeat);
			repeat.classList.toggle("active", _this.isRepeat);
		}

		// xử lý khi audio ended
		audio.onended = function () {
			if (_this.isRepeat) {
					audio.play();
			}
			else {
					nextBtn.click();
			}
		}

		//play song khi click playlist
		contentListSuggest.onclick = function(e) {
			const songNode = e.target.closest('.suggest__item:not(.active)')
				if(songNode) {
					_this.currentIndex = Number(songNode.dataset.index);
					_this.loadCurrentSong();
					audio.play();
					_this.render();
				}
		}

		//volume
		progressVolume.oninput = function(e) {
			audio.muted = false
			audio.volume  = e.target.value / 100
			_this.currentVolume = audio.volume
			return _this.currentVolume === 0 ? volumeOffOnElement.classList.add('muted') : volumeOffOnElement.classList.remove('muted');
		}
		// muted and unmuted
		volumeOffOnElement.onclick = function() {
			if(audio.muted) {
				audio.muted = false;
				volumeOffOnElement.classList.remove('muted')
				volumeOffOnElement.value = 100
			} else {
				audio.muted = true
				volumeOffOnElement.classList.add('muted')
				volumeOffOnElement.value = 0;
			}
		}
	},
	scrollToActiveSong: function() {
		setTimeout(() => {
			$('.suggest__item.active').scrollIntoView({
					behavior: 'auto',
					block: 'center'
			})
	},300)
	},

	loadConfig: function() {
		this.isRandom = this.config.isRandom;
		this.isRepeat = this.config.isRepeat;
	},

	loadCurrentSong: function() {
		audio.src = this.currentSong.path;
		heading.textContent = this.currentSong.name;
		subheading.textContent = this.currentSong.singer;
		cdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
		cdThumb.classList.add('active');
		contentNow.style.backgroundImage = `url("${this.currentSong.image}")`;
		contentNowTitle.textContent = this.currentSong.name;
		contentNowsubTitle.textContent = this.currentSong.singer;

		// Render duration time audio
		audio.addEventListener('loadedmetadata', function() {
			const mainDuration = audio.duration
			const minDuration = Math.floor(audio.duration / 60)
			const secDuration = Math.floor(mainDuration - minDuration*60)
			if(secDuration != 0) {
				durationSong.innerText = `${minDuration}:${secDuration}`
			} else {
				durationSong.innerText = `${minDuration}:00`
			}
		})
	},
	
	nextSong: function() {
		this.currentIndex++;
		if(this.currentIndex >= this.songs.length) {
			this.currentIndex = 0;
		}
		this.loadCurrentSong();
	},

	prevSong: function() {
		this.currentIndex--;
		if(this.currentIndex < 0) {
			this.currentIndex = this.songs.length -1 ;
		}
		this.loadCurrentSong();
	},

	playRandomSong:function() {
		let newIndex 
		do {
			newIndex = Math.floor(Math.random() * this.songs.length);
		} while(newIndex === this.currentIndex)

			this.currentIndex = newIndex;
			this.loadCurrentSong();
	},

	start: function() {
		//gán cấu hình từ config vao ứng dụng
		this.loadConfig();

		//định nghĩa thuộc tính cho object
		this.defineProperties();

		//lắng nghe/ xử lý các sự kiện
		this.handleEvents();

		this.loadCurrentSong();

		//render playlist
		this.render();

		//hiển thị trạng thái ban đầu của button repeat và ranđom
		random.classList.remove("active", this.isRandom);
		repeat.classList.remove("active", this.isRepeat);
	},
};
app.start();


