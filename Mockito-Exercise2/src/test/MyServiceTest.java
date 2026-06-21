package com.example;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Create Mock Object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Create Service Object
        MyService service = new MyService(mockApi);

        // Call Method
        service.fetchData();

        // Verify Interaction
        verify(mockApi).getData();
    }
}