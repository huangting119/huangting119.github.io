//hey.
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的图片和对应的文本内容
    const images = document.querySelectorAll('.tile img');
    
    images.forEach(function(img) {
      img.addEventListener('mouseover', function() {
        // 当鼠标悬停在图片上时，显示文本
        this.nextElementSibling.classList.add('active');
      });
  
      img.addEventListener('mouseout', function() {
        // 当鼠标移开时，隐藏文本
        this.nextElementSibling.classList.remove('active');
      });
    });
  });