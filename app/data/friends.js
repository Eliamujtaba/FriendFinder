// ===============================================================================
// DATA
// Below data will hold all of the friends
// ===============================================================================

var friends = [
    {
      name:"James Cameron",
      photo:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYxOnVmKDeAhWFKXwKHXMaDzQQjRx6BAgBEAU&url=https%3A%2F%2Fimgur.com%2Fgallery%2FAoIJN&psig=AOvVaw1yDxLo8g7k3U88BTDi_QOv&ust=1540508811038131",
      scores:[
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
    },
    {
      name: "Angelina Jolie",
      photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTUT0_iaCU5Q%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTUT0_iaCU5Q&docid=qPF80ELuNdmiFM&tbnid=1dW2gTpow_KbzM%3A&vet=10ahUKEwi15_jcmaDeAhUgwcQHHanuADIQMwhuKAgwCA..i&w=1280&h=720&bih=678&biw=1131&q=angelina%20jolie%20quotes&ved=0ahUKEwi15_jcmaDeAhUgwcQHHanuADIQMwhuKAgwCA&iact=mrc&uact=8",
      scores: [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
    },
    {
      name: "Jason",
      photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fthequotes.in%2Fwp-content%2Fuploads%2F2016%2F09%2FJason-Statham-Quotes-2-1024x432.jpg&imgrefurl=http%3A%2F%2Fthequotes.in%2Fjason-statham-quotes%2F&docid=WNdT6bw5hhYwEM&tbnid=z3lrme4N1BGf_M%3A&vet=10ahUKEwiOtcbTmqDeAhWF0FQKHUCqCMoQMwhlKAswCw..i&w=1024&h=432&bih=678&biw=1131&q=jason%20quotes&ved=0ahUKEwiOtcbTmqDeAhWF0FQKHUCqCMoQMwhlKAswCw&iact=mrc&uact=8",
      scores: [
        "3",
        "2",
        "1",
        "3",
        "2",
        "1",
        "3",
        "2",
        "1",
        "5"
      ]
    },
    {
      name: "Brad pitt",
      photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fstatusmind.com%2Fimages%2F2016%2F09%2FSuccess-Quotes-62732-statusmind.com.jpg&imgrefurl=http%3A%2F%2Fstatusmind.com%2Fsuccess-quotes-153%2F&docid=nfc-_GqMNR39mM&tbnid=N_gpktHRMAv-sM%3A&vet=10ahUKEwjj6LKQm6DeAhWFwVQKHXlqDb8QMwiIASgYMBg..i&w=600&h=337&bih=678&biw=1131&q=brad%20pitt%20quotes&ved=0ahUKEwjj6LKQm6DeAhWFwVQKHXlqDb8QMwiIASgYMBg&iact=mrc&uact=8",
      scores: [
        "3",
        "2",
        "1",
        "3",
        "2",
        "1",
        "3",
        "2",
        "1",
        "4"
      ]
    },
    {
      name: "Selena Gomez",
      photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6f%2F46%2F9c%2F6f469c4d241b8e08881c8892439945f4.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F629096641670516521%2F&docid=lB0v6xPugikrMM&tbnid=2FM_IH5JZbL9iM%3A&vet=10ahUKEwjy3Pvxm6DeAhVF6Z8KHbLWACYQMwhyKAYwBg..i&w=750&h=744&bih=678&biw=1131&q=selena%20gomez%20quotes&ved=0ahUKEwjy3Pvxm6DeAhVF6Z8KHbLWACYQMwhyKAYwBg&iact=mrc&uact=8",
      scores: [
        "5",
        "4",
        "3",
        "2",
        "1",
        "5",
        "4",
        "3",
        "2",
        "1"
      ]
    },
    {
      name: "Salman Khan",
      photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F26%2Fe8%2F33%2F26e8331ca78b51727ff33096e8ecd2a4.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F792492865650315935%2F&docid=uZ592qZAR24kaM&tbnid=pBe1oslNlV9MpM%3A&vet=10ahUKEwic_7C6nKDeAhXjq1QKHdtFAVgQMwh0KA0wDQ..i&w=672&h=479&bih=678&biw=1131&q=salman%20khan%20quotes&ved=0ahUKEwic_7C6nKDeAhXjq1QKHdtFAVgQMwh0KA0wDQ&iact=mrc&uact=8",
      scores: [
        "5",
        "4",
        "3",
        "2",
        "1",
        "5",
        "4",
        "3",
        "2",
        "1"
      ]
	},
	{
		name: "Johnny Depp",
		photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F02%2F47%2Fd8%2F0247d82a22919c91e1239525c6022793.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F280982464228702209%2F&docid=RgaX-5FfLs1vbM&tbnid=hjJ1Zw1W0igtKM%3A&vet=10ahUKEwj10L2vnaDeAhWMGXwKHc8SAkUQMwhxKAgwCA..i&w=640&h=439&bih=678&biw=1131&q=johnny%20depp%20quotes&ved=0ahUKEwj10L2vnaDeAhWMGXwKHc8SAkUQMwhxKAgwCA&iact=mrc&uact=8",
		scores: [
		  "3",
		  "2",
		  "1",
		  "3",
		  "2",
		  "1",
		  "3",
		  "2",
		  "1",
		  "4"
		]
	  },
	  {
		name: "Love",
		photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fscstylecaster.files.wordpress.com%2F2013%2F12%2F1-love-quotes-amy-poehler4.jpg%3Fw%3D1024%26h%3D1289&imgrefurl=http%3A%2F%2Fstylecaster.com%2Flove-quotes%2F&docid=5WTV-C6pbMpz_M&tbnid=PSVFlIdH-80FOM%3A&vet=10ahUKEwiSnNLjnaDeAhWMLXwKHRkeBpcQMwhxKAUwBQ..i&w=1024&h=1289&bih=678&biw=1131&q=love%20quotes&ved=0ahUKEwiSnNLjnaDeAhWMLXwKHRkeBpcQMwhxKAUwBQ&iact=mrc&uact=8",
		scores: [
		  "3",
		  "2",
		  "1",
		  "3",
		  "2",
		  "1",
		  "3",
		  "2",
		  "1",
		  "4"
		]
	  },
	  {
		name: "John Adams",
		photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpositivethesaurus.com%2Fwp-content%2Fuploads%2F2016%2F08%2Fjohn-adams-positive-presidential-quotes-to-be-good.jpg&imgrefurl=https%3A%2F%2Fpositivethesaurus.com%2Finspirational-john-adams-presidential-quotes%2F&docid=AqCTW4V0sGql5M&tbnid=lai8BeugPWD-bM%3A&vet=10ahUKEwjejfernqDeAhUHrVQKHWolAiEQMwhiKAQwBA..i&w=845&h=475&bih=678&biw=1131&q=john%20adams%20quotes&ved=0ahUKEwjejfernqDeAhUHrVQKHWolAiEQMwhiKAQwBA&iact=mrc&uact=8",
		scores: [
		  "3",
		  "2",
		  "1",
		  "3",
		  "2",
		  "1",
		  "3",
		  "2",
		  "1",
		  "4"
		]
	  },
	  {
		name: "Nicolas Cage",
		photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mottocosmos.com%2Fwp-content%2Fuploads%2F2018%2F04%2F18201-Nicolas-Cage-quote-STORY-01-900x487.jpg&imgrefurl=https%3A%2F%2Fwww.mottocosmos.com%2F2018%2F04%2F04%2Fnicolas-cage-said-quotes-01%2F&docid=cWVpJUuG8EeigM&tbnid=MQHKWnM3p_wukM%3A&vet=10ahUKEwi7jcDlnqDeAhWJInwKHRifAd0QMwhDKAMwAw..i&w=900&h=487&bih=678&biw=1131&q=nicolas%20cage%20quotes&ved=0ahUKEwi7jcDlnqDeAhWJInwKHRifAd0QMwhDKAMwAw&iact=mrc&uact=8",
		scores: [
		  "3",
		  "2",
		  "1",
		  "3",
		  "2",
		  "1",
		  "3",
		  "2",
		  "1",
		  "4"
		]
	  }
  ]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;