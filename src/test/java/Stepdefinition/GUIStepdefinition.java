package Stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class GUIStepdefinition {
	public WebDriver driver;

	@Before
	public void initialize() {
		System.out.println("this is before class");

		System.getProperty("webdriver.chrome.driver",
				"/Users/gazifarhana/eclipse-workspace1/eBay1/chromedriver");

		driver = new ChromeDriver();
		driver.manage().window().maximize();

		driver.get("https://www.ebay.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}
	

	
	@Then("^user at eBay homepage$")
	public void ebay() {
		System.out.println("i am at eBay homepage  "+driver.getTitle());
		
	}
	@Then("^user enter item \"([^\"]*)\"$")
	public void entering(String a) throws InterruptedException {
		WebElement item=driver.findElement(By.xpath("//input[@id='gh-ac']"));
		item.sendKeys(a);
		Thread.sleep(2000);
	}
	
	@Then("^user click on selected item$")
	public void xbox() throws InterruptedException {
		driver.findElement(By.xpath("//a[contains(.,'xbox one – Video Games')]")).click();
	Thread.sleep(2000);
	}
	@Then("^user click on sort$")
	public void sort() throws InterruptedException {
		driver.findElement(By.xpath(".//*[@id='DashSortByContainer']/ul[1]/li/div/a")).click();
		Thread.sleep(2000);
	}
	@Then("^user click on Time:newly listed$")
	public void sorteditem () throws InterruptedException {
		driver.findElement(By.xpath(".//*[@id='SortMenu']/li[2]/a")).click();
	Thread.sleep(2000);
	
	}
	@Then("^user click on shop by model$")
	public void shop() throws InterruptedException{
		driver.findElement(By.xpath(".//*[@id='AnswersModule']/div/div[2]/nav/ul/li[1]/a/div")).click();
	Thread.sleep(2000);	
	}
	@Then("^user at search result page$")
	public void searchpage() {
		System.out.println("i am at search result page  "+driver.getTitle());
	}
	@After
	public void teardown() {
		System.out.println("this is after class annotation!!!");
		System.out.println("test finished!!!!!");
		driver.manage().deleteAllCookies();
		driver.close();
	
	
	
	
	}	
	
}
